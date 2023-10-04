import { memo, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'

import cls from './AccountDetailsForm.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppInput, AppInputTheme } from 'shared/ui/AppInput/AppInput'
import AppButton, { AppButtonFillTheme, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { updateAccountDetails } from '../../model/services/updateAccountDetails/updateAccountDetails'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { validationSchema } from '../../model/services/formValidation/accountDetails'
import { getAccountDisplayName, getAccountEmail, getAccountFirstname, getAccountLastname } from 'entities/AccountDetails'

interface AccountDetailsFormProps {
  className?: string
}

export interface AccountDetailsFormState {
  firstName: string
  lastName: string
  displayName: string
  email: string
}

const defaultInitialValues: AccountDetailsFormState = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: ''
}

const AccountDetailsForm = memo(({ className }: AccountDetailsFormProps) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('profile')

  const firstName = useSelector(getAccountFirstname)
  const lastName = useSelector(getAccountLastname)
  const displayName = useSelector(getAccountDisplayName)
  const email = useSelector(getAccountEmail)

  // States
  const [readOnly, setReadOnly] = useState(true)
  const [initialValues, setInitialValues] = useState<AccountDetailsFormState>(defaultInitialValues)

  useEffect(() => {
    setInitialValues({
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      displayName: displayName ?? '',
      email: email ?? ''
    })
  }, [displayName, email, firstName, lastName])

  const handleSubmit = useCallback((values: AccountDetailsFormState) => {
    void dispatch(updateAccountDetails(values))
    setReadOnly(true)
  }, [dispatch])

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true
  })

  const onEdit = useCallback(() => {
    setReadOnly(false)
  }, [])

  const onCancelEdit = useCallback(() => {
    setReadOnly(true)
    formik.resetForm()
  }, [formik])

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <form onSubmit={formik.handleSubmit} className={cls.profileData}>
        {readOnly && (
          <div className={cls.topButtonWrapper}>
            <AppButton
              theme={AppButtonTheme.SHARP}
              fillTheme={AppButtonFillTheme.SOLID}
              size={AppButtonSize.M}
              onClick={onEdit}
            >
              {t('edit')}
            </AppButton>
          </div>
        )}

        {!readOnly && (
          <div className={cls.topButtonWrapper}>
            <AppButton
              theme={AppButtonTheme.SHARP}
              fillTheme={AppButtonFillTheme.OUTLINE}
              size={AppButtonSize.M}
              onClick={onCancelEdit}
            >
              {t('cancel')}
            </AppButton>

            <AppButton
              theme={AppButtonTheme.SHARP}
              size={AppButtonSize.M}
              type="submit"
            >
              {t('saveChanges')}
            </AppButton>
          </div>
        )}

        <AppInput
          name="firstName"
          theme={AppInputTheme.OUTLINED}
          value={formik.values.firstName}
          error={formik.errors.firstName}
          onChange={formik.handleChange}
          placeholder={t('enterFirstName')}
          showError
          autofocus={!readOnly}
          disabled={readOnly}
        />

        <AppInput
          name="lastName"
          theme={AppInputTheme.OUTLINED}
          value={formik.values.lastName}
          error={formik.errors.lastName}
          onChange={formik.handleChange}
          placeholder={t('enterLastName')}
          showError
          disabled={readOnly}
        />

        <AppInput
          name="displayName"
          theme={AppInputTheme.OUTLINED}
          value={formik.values.displayName}
          error={formik.errors.displayName}
          onChange={formik.handleChange}
          placeholder={t('enterDisplayName')}
          showError
          disabled={readOnly}
        />

        <AppInput
          name="email"
          theme={AppInputTheme.OUTLINED}
          value={formik.values.email}
          error={formik.errors.email}
          onChange={formik.handleChange}
          placeholder={t('enterEmail')}
          showError
          disabled={readOnly}
        />

        {!readOnly && (
          <AppButton
            theme={AppButtonTheme.SHARP}
            size={AppButtonSize.M}
            type="submit"
          >
            {t('saveChanges')}
          </AppButton>
        )}
      </form>
    </div>
  )
})

export default AccountDetailsForm

import * as Yup from 'yup'

export const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  displayName: Yup.string().required('Required')
})

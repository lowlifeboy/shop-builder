import * as Yup from 'yup'

export const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  rememberMe: Yup.boolean().required('Required')
})

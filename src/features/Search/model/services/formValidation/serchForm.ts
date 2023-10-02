import * as Yup from 'yup'

export const validationSchema = Yup.object({
  search: Yup.string()
})

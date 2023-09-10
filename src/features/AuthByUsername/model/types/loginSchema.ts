export interface LoginSchema {
  username: string
  password: string
  isLoading: boolean
  rememberMe: boolean
  error?: string
}

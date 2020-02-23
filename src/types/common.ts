export type AuthInfo = {
  loggedIn: boolean
  userName?: string
  reload?: () => void
}

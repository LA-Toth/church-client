const PROD_URL = 'http://api.laszloattilatoth.me/'
let baseUrl: string | undefined

export function getApiBaseUrl(): string {
  if (baseUrl === undefined) baseUrl = location.hostname.includes('.lvh.me') ? 'http://api.lvh.me:3000/' : PROD_URL
  return baseUrl
}

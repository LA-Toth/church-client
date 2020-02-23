import axios from 'axios'
import { getApiBaseUrl } from '../config'
import jQuery from 'jQuery'

class AuthService {
  logIn(credentials) {
    return jQuery.post(getApiBaseUrl() + 'login', credentials)
  }

  getUserInfo() {
    return JSON.parse(localStorage ? localStorage.getItem('userInfo') || '{}' : '{}')
  }

  getAuthHeader() {
    return { headers: { Authorization: 'Bearer ' + this.getUserInfo().token } }
  }

  logOut() {
    localStorage.removeItem('userInfo')
    return axios.post(getApiBaseUrl() + 'logout', {}, this.getAuthHeader())
  }
}

export default new AuthService()

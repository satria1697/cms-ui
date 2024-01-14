import LocalStorage from '@/service/local_storage'

export default class LoginService {
  private localStorage = new LocalStorage()

  setTokenToLocalStorage(token: string) {
    this.localStorage.setData('token', token)
  }

  getTokenFromLocalStorage(): string {
    return this.localStorage.getData('token') || ''
  }

  isTokenExist() {
    return !!this.getTokenFromLocalStorage()
  }
}

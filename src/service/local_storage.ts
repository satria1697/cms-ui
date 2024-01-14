export default class LocalStorage {
  getData(key: string) {
    return localStorage.getItem(key)
  }

  setData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

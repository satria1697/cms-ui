import { useToast } from 'vue-toast-notification'

export default class MiToast {
  toast = useToast({
    position: 'top-right'
  })
  failed(message: string) {
    this.toast.error(message)
  }

  success(message: string) {
    this.toast.success(message)
  }

  info(message: string) {
    this.toast.info(message)
  }
}

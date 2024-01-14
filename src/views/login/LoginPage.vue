<script setup lang="ts">
import { reactive } from 'vue'
import MiButton from '@/components/global/MiButton.vue'
import MiInput from '@/components/global/MiInput.vue'
import { miToast } from '@/main'
import LoginService from '@/service/login'
import { useRouter } from 'vue-router'

const loginService = new LoginService()
const router = useRouter()

const data = reactive({
  username: '',
  password: ''
})

const loginAction = () => {
  if (data.username == 'mikael' && data.password == 'test1234') {
    miToast.success('Success Login')
    loginService.setTokenToLocalStorage('token')
    router.push({ name: 'home' })
    return
  }
  miToast.failed('Error Login')
}
</script>

<template>
  <div class="grid place-content-center h-full">
    <form @submit.prevent="() => loginAction()">
      <div class="mb-2">
        <span class="text-3xl font-semibold">Login</span>
      </div>
      <div class="mb-3">
        <mi-input v-model="data.username" label="Username" />
        <mi-input v-model="data.password" type="password" label="Password" />
      </div>
      <div>
        <mi-button>Login</mi-button>
      </div>
    </form>
  </div>
</template>

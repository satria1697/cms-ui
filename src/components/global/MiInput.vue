<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<'text' | 'password'>,
    default: 'text'
  }
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const updateValue = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="flex flex-col">
    <label>{{label}}</label>
    <input :type="type" class="rounded-md border px-0.5 py-1.5" :value="modelValue" @input="updateValue(($event.target as HTMLInputElement).value)"  />
  </div>
</template>
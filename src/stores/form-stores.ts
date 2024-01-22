import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

interface FormConfig {
  label: string
  prop: string
  type: 'input' | 'select'
  event?: 'input' | 'change' | 'blur' | 'focus' | 'click'
  eventName?: string
  options?: string[]
}



export const useFormStore = defineStore('formStore', () => {
  const formConfigList = reactive<FormConfig[]>([])

  const buttonConfigList = reactive<FormConfig[]>([])

  function push(config: FormConfig) {
    formConfigList.push(config)
  }

  return { formConfigList, push }
})

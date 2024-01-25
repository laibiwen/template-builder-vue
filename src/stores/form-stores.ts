import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export interface FormConfig {
  id: number
  label: string
  prop: string
  type: 'input' | 'select'
  event?: 'input' | 'change' | 'blur' | 'focus' | 'click' | ''
  eventName?: string
  options?: Record<string, any>[]
  placeholder?: string
  optionsKey: string
}

export const useFormStore = defineStore('formStore', () => {
  const formConfigList = ref<FormConfig[]>([])

  const buttonConfigList = reactive<FormConfig[]>([])

  function push(config: FormConfig) {
    formConfigList.value.push(config)
  }

  function initFormList(list: FormConfig[]) {
    formConfigList.value = list
  }

  function editItem(item: FormConfig) {
    const index = formConfigList.value.findIndex((i) => i.prop === item.prop)
    formConfigList.value.splice(index, 1, item)
  }

  function deleteItem(item: FormConfig) {
    const index = formConfigList.value.findIndex((i) => i.prop === item.prop)
    formConfigList.value.splice(index, 1)
  }

  return { formConfigList, push, initFormList, editItem, deleteItem }
})

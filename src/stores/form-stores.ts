import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export interface FormConfig {
  label: string
  prop: string
  type: 'input' | 'select'
  event?: 'input' | 'change' | 'blur' | 'focus' | 'click' | ''
  eventName?: string
  options?: string[]
  placeholder?: string
  optionsKey?: string
}

export const useFormStore = defineStore('formStore', () => {
  const formConfigList = reactive<FormConfig[]>([
    {
      event: '',
      eventName: '',
      label: '输入款1',
      optionsKey: '',
      placeholder: '',
      prop: 'input',
      type: 'input'
    }
  ])

  const buttonConfigList = reactive<FormConfig[]>([])

  function push(config: FormConfig) {
    formConfigList.push(config)
  }

  function editItem(item: FormConfig) {
    const index = formConfigList.findIndex((i) => i.prop === item.prop)
    formConfigList.splice(index, 1, item)
  }

  function deleteItem(item: FormConfig) {
    const index = formConfigList.findIndex((i) => i.prop === item.prop)
    formConfigList.splice(index, 1)
  }

  return { formConfigList, push, editItem, deleteItem }
})

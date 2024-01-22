<template>
  <el-dialog :model-value="visible" :title="title" width="600px" :before-close="handleClose">
    <el-form ref="formRef" :model="formData" :rules="rules" label-width="100">
      <el-form-item label="类型" prop="type">
        <el-select v-model="formData.type" placeholder="请选择" clearable>
          <el-option key="input" label="输入框" value="input" />
          <el-option key="select" label="选择框" value="select" />
        </el-select>
      </el-form-item>
      <el-form-item label="label" prop="label">
        <el-input v-model="formData.label" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="prop" prop="prop">
        <el-input v-model="formData.prop" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="optionsKey" prop="optionsKey" v-if="formData.type === 'select'">
        <el-input v-model="formData.optionsKey" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="事件" prop="event">
        <el-select v-model="formData.event" placeholder="请选择" clearable>
          <el-option key="input" label="input" value="input" />
          <el-option key="change" label="change" value="change" />
          <el-option key="blur" label="blur" value="change" />
          <el-option key="focus" label="focus" value="change" />
        </el-select>
      </el-form-item>
      <el-form-item label="事件名" prop="eventName">
        <el-input v-model="formData.eventName" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="占位文案" prop="placeholder">
        <el-input v-model="formData.placeholder" placeholder="请输入" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="onConfirm"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useFormStore } from '@/stores/form-stores'
import type { FormConfig } from '@/stores/form-stores.ts'

const formStore = useFormStore()

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as () => 'ADD' | 'EDIT',
    default: 'ADD'
  },
  title: {
    type: String,
    default: '标题'
  },
  initData: {
    type: Object as () => FormConfig,
    default: () => ({})
  }
})

const rules = {
  type: [{ required: true, message: '请选择组件类型', trigger: 'change' }],
  label: [{ required: true, message: '请输入组件label', trigger: 'blur' }],
  prop: [{ required: true, message: '请输入组件prop', trigger: 'blur' }],
  optionsKey: [{ required: true, message: '请输入optionsKey', trigger: 'blur' }]
}

const formData = reactive({
  type: '',
  label: '',
  prop: '',
  optionsKey: '',
  event: '',
  eventName: '',
  placeholder: ''
}) as unknown as FormConfig

watch(
  () => props.initData,
  (val) => {
    if (props.type !== 'EDIT') return
    formData.type = val.type
    formData.label = val.label
    formData.prop = val.prop
    formData.optionsKey = val.optionsKey
    formData.event = val.event
    formData.eventName = val.eventName
    formData.placeholder = val.placeholder
  },
  { deep: true, immediate: true }
)

const emits = defineEmits(['update:visible', 'onConfirm'])

const formRef = ref()

const handleClose = () => {
  emits('update:visible', false)
  formRef.value?.resetFields()
}

const onConfirm = () => {
  formRef.value?.validate((valid: boolean) => {
    if (!valid) return
    emits('onConfirm', { ...formData }, props.type)
    handleClose()
  })
}
</script>

<style scoped></style>

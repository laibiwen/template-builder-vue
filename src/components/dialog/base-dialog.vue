<template>
  <el-dialog :model-value="visible" :title="title" width="30%" :before-close="handleClose">
    <el-form :model="formData" :rules="rules" label-width="auto">
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
        <el-input v-model="formData.label" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="事件" prop="event">
        <el-input v-model="formData.event" placeholder="请输入" />
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
        <el-button type="primary" @click="handleClose"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '标题'
  }
})

const rules = {
  type: [{ required: true, message: '请选择组件类型', trigger: 'change' }],
  label: [{ required: true, message: '请输入组件label', trigger: 'blur' }],
  prop: [{ required: true, message: '请输入组件prop', trigger: 'blur' }]
}

const formData = reactive({
  type: '',
  label: '',
  prop: '',
  event: '',
  eventName: '',
  placeholder: ''
})

const emits = defineEmits(['update:visible'])

const handleClose = () => {
  emits('update:visible', false)
}
</script>

<style scoped></style>

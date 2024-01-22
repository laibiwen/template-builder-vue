<template>
  <div>
    <el-form inline>
      <el-form-item>
        <el-radio-group v-model="size" label="size control">
          <el-radio-button label="large">large</el-radio-button>
          <el-radio-button label="default">default</el-radio-button>
          <el-radio-button label="small">small</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="labelPosition" label="position control">
          <el-radio-button label="left">Left</el-radio-button>
          <el-radio-button label="right">Right</el-radio-button>
          <el-radio-button label="top">Top</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="inline">
        <el-switch v-model="inline" />
      </el-form-item>
    </el-form>
  </div>
  <br />
  <el-form
    ref="form"
    :model="formData"
    :inline="inline"
    :label-position="labelPosition"
    :size="size"
  >
    <template v-for="item in list" :key="item.prop">
      <el-form-item :label="item.label" :prop="item.prop" v-show="item.type === 'input'">
        <el-input v-model="formData[item.prop]" :placeholder="item.placeholder || '请输入'" />
      </el-form-item>
    </template>
  </el-form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFormStore } from '@/stores/form-stores.ts'

const formStore = useFormStore()
const list = computed(() => {
  return formStore.formConfigList
})

const formData = ref({})
const labelPosition = ref('left')
const size = ref('default')
const inline = ref(true)

console.log('list==', list)
</script>

<style scoped>
.el-radio-group {
  margin-right: 12px;
}
</style>

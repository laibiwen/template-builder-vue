<template>
  <h1>表单设计器</h1>
  <el-button style="margin-bottom: 12px;" type="primary" @click="onSaveConfig">保存配置</el-button>
  <el-tabs type="border-card">
    <el-tab-pane label="表单项"><FormPart /></el-tab-pane>
    <el-tab-pane label="按钮"><ButtonPart /></el-tab-pane>
    <el-tab-pane label="表格"> <TablePart /></el-tab-pane>
  </el-tabs>

  <br />

  <h2>预览</h2>

  <Preview />
</template>

<script setup lang="ts">
import axios from 'axios'
import FormPart from './form/index.vue'
import ButtonPart from './button/index.vue'
import TablePart from './table/index.vue'
import Preview from './preview/index.vue'
import { onMounted } from 'vue'



const onSaveConfig = async () => {
  const res = await axios.post('/api/template', {
    event: '',
    eventName: '',
    label: '输入款1',
    optionsKey: '',
    placeholder: '',
    prop: 'input',
    type: 'input'
  })
  console.log(res)
}


</script>

<style lang="scss" scoped></style>

<script setup lang="ts"></script>

<style scoped></style>

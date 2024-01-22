<template>
  <h1>表单设计器</h1>
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
import FormPart from './form/index.vue'
import ButtonPart from './button/index.vue'
import TablePart from './table/index.vue'
import Preview from './preview/index.vue'
</script>

<style lang="scss" scoped></style>

<script setup lang="ts"></script>

<style scoped></style>

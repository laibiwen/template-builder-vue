<template>
  <h2>组件信息</h2>
  <el-form v-bind="$attrs" class="demo-form">
    <el-form-item label="技术框架">
      <el-select v-model="formInline.user" placeholder="请选择" clearable style="width: 100%">
        <el-option label="Vue3" value="shanghai" />
        <el-option label="React" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="页面类型">
      <el-select v-model="formInline.region" placeholder="请选择" clearable>
        <el-option label="表单" value="1" />
        <el-option label="弹窗" value="2" />
        <el-option label="默认模板" value="3" />
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  date: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped>
.demo-form {
  width: 400px;
}
</style>

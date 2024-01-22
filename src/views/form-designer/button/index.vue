<template>
  <el-table :data="tableData" stripe border style="width: 100%" max-height="450">
    <el-table-column prop="type" label="组件类型">
      <template #default="scope">
        <!-- 下拉选择器 -->
        <el-select v-model="scope.row.type" placeholder="请选择" clearable style="width: 100%">
          <el-option key="button" label="按钮" value="button" />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column prop="label" label="按钮文案">
      <template #default="scope">
        <!-- 输入框 -->
        <el-input v-model="scope.row.label" placeholder="请输入" />
      </template>
    </el-table-column>
    <el-table-column prop="prop" label="按钮类型">
      <template #default="scope">
        <el-select v-model="scope.row.type" placeholder="请选择" clearable style="width: 100%">
          <el-option key="default" label="default" value="default" />
          <el-option key="primary" label="primary" value="primary" />
          <el-option key="success" label="success" value="success" />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column prop="prop" label="按钮尺寸">
      <template #default="scope">
        <el-select v-model="scope.row.size" placeholder="请选择" clearable style="width: 100%">
          <el-option key="large" label="large" value="large" />
          <el-option key="default" label="default" value="default" />
          <el-option key="small" label="small" value="small" />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column prop="event" label="事件">
      <template #default="scope">
        <!-- 下拉选择器 -->
        <el-select v-model="scope.row.event" placeholder="请选择" clearable style="width: 100%">
          <el-option key="click" label="click" value="click" />
          <el-option key="change" label="change" value="change" />
          <el-option key="blur" label="blur" value="blur" />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column prop="event" label="事件名">
      <template #default="scope">
        <!-- 输入框 -->
        <el-input v-model="scope.row.eventName" placeholder="请输入" />
      </template>
    </el-table-column>
    <el-table-column prop="action" label="操作">
      <template #default>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem">添加表单组件</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tableData = ref([
  {
    type: 'primary',
    size: 'default',
    label: '查询',
    event: 'click',
    eventName: 'onSearch'
  }
])

const onAddItem = () => {
  tableData.value.push({
    type: 'primary',
    size: 'default',
    label: '',
    event: 'click',
    eventName: ''
  })
}
</script>

<style lang="scss" scoped></style>

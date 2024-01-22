<template>
  <el-table :data="tableData" stripe border style="width: 100%" max-height="450">
    <el-table-column prop="type" label="组件类型">
      <template #default="scope">
        <!-- 下拉选择器 -->
        <el-select v-model="scope.row.type" placeholder="请选择" clearable style="width: 100%">
          <el-option key="input" label="输入框" value="input" />
          <el-option key="select" label="选择框" value="select" />
          <el-option key="button" label="按钮" value="button" />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column prop="label" label="label">
      <template #default="scope">
        <!-- 输入框 -->
        <el-input v-model="scope.row.label" placeholder="请输入" />
      </template>
    </el-table-column>
    <el-table-column prop="prop" label="prop">
      <template #default="scope">
        <!-- 输入框 -->
        <el-input v-model="scope.row.prop" placeholder="请输入" />
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
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleClick(scope)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem">添加表单组件</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tableData = ref([
  {
    type: 'input',
    label: '用户ID',
    prop: 'user_id',
    event: 'change',
    eventName: ''
  },
  {
    type: 'select',
    label: '位置',
    prop: 'position',
    event: 'change',
    eventName: ''
  },
  {
    type: 'button',
    label: '查询',
    prop: '',
    event: 'click',
    eventName: ''
  }
])

const type = ref('')

const onAddItem = () => {
  tableData.value.push({
    type: type.value,
    label: '查询',
    prop: '',
    event: 'click',
    eventName: ''
  })
}

const handleClick = (scope: any) => {}
</script>

<style lang="scss" scoped></style>

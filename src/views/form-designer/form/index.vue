<template>
  <el-table :data="tableData" stripe border style="width: 100%" max-height="450">
    <template v-for="item in tableConfig" :key="item.prop">
      <el-table-column :prop="item.prop" :label="item.label"> </el-table-column>
    </template>

    <el-table-column prop="action" label="操作">
      <template #default>
        <el-button link type="primary" size="small">编辑</el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem">添加表单组件</el-button>
  <FormDialog v-model:visible="visible" @onConfirm="onConfirm" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormDialog from '@/components/dialog/form-config.vue'

const tableConfig = [
  {
    prop: 'type',
    label: '组件类型'
  },
  {
    prop: 'label',
    label: 'label'
  },
  {
    prop: 'prop',
    label: 'prop'
  },
  {
    prop: 'event',
    label: '事件'
  },
  {
    prop: 'eventName',
    label: '事件名'
  }
]

const tableData = ref<any>([])

const visible = ref(false)

const onAddItem = () => {
  visible.value = true
}

const onConfirm = (formConfig: any) => {
  tableData.value.push(formConfig)
  // })
}
</script>

<style lang="scss" scoped></style>

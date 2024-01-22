<template>
  <el-table :data="tableData" stripe border style="width: 100%" max-height="450">
    <template v-for="item in tableConfig" :key="item.prop">
      <el-table-column :prop="item.prop" :label="item.label"> </el-table-column>
    </template>

    <el-table-column prop="action" label="操作">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="onEdit(scope.row)">编辑</el-button>
        <el-button link type="primary" size="small" @click="onDel(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem">添加表单组件</el-button>
  <FormDialog
    v-model:visible="visible"
    :initData="currentRowData"
    :type="type"
    @onConfirm="onConfirm"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormDialog from '@/components/dialog/form-config.vue'
import { useFormStore } from '@/stores/form-stores'
import type { FormConfig } from '@/stores/form-stores.ts'

const formStore = useFormStore()

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

const tableData = ref(formStore.formConfigList)

const visible = ref(false)

const onAddItem = () => {
  type.value = 'ADD'
  visible.value = true
}

const currentRowData = ref()

type Type = 'ADD' | 'EDIT'

const type = ref<Type>('ADD')
const onEdit = (row: FormConfig) => {
  visible.value = true
  type.value = 'EDIT'
  currentRowData.value = { ...row }
}

const onDel = (row: FormConfig) => {
  tableData.value = tableData.value.filter((item: FormConfig) => item.prop !== row.prop)
  formStore.deleteItem(row)
}

const onConfirm = (formConfig: FormConfig, type: Type) => {
  if (type === 'ADD') {
    tableData.value.push(formConfig)
    formStore.push({ ...formConfig })
  } else {
    formStore.editItem(formConfig)
  }
}
</script>

<style lang="scss" scoped></style>

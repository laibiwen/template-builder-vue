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
import { ref, onMounted, computed } from 'vue'
import FormDialog from '@/components/dialog/form-config.vue'
import { useFormStore } from '@/stores/form-stores'
import type { FormConfig } from '@/stores/form-stores.ts'
import axios from 'axios'

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

const tableData = computed(() => formStore.formConfigList)

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

const getFormConfigList = async () => {
  const { data } = await axios.get('/api/template')
  if (data.code === 0) {
    console.log('data', data.data)
    formStore.initFormList(data.data)
  }
}
onMounted(() => {
  getFormConfigList()
})

const onEditConfig = async (row: any) => {
  const res = await axios.put(`/api/template/${row.id}`, {
    ...row
  })
  console.log(res)
}

const onAddConfig = async (row: any) => {
  const res = await axios.post('/api/template', {
    ...row
  })
  console.log(res)
}

const onConfirm = (formConfig: FormConfig, type: Type) => {
  if (type === 'ADD') {
    formStore.push({ ...formConfig })
    onAddConfig(formConfig)
  } else {
    formStore.editItem(formConfig)
    onEditConfig(formConfig)
  }
}
</script>

<style lang="scss" scoped></style>

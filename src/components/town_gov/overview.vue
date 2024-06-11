<template>
  <div class="overview">
    <el-button type="primary" @click="ViewAddress">查询合约地址</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
const Address = '0x0000000000000000000000000000000000000000'
const ViewAddress = () => {
  ElMessageBox.alert(Address, '合约地址', {
    confirmButtonText: '确定'
    
  }),
    navigator.clipboard.writeText(Address)
      .then(() => {
        ElMessage({
          message: '查询成功，已复制到剪贴板',
          type: 'success',
        })
      })
}
</script>
<template>
    <el-button plain @click="centerDialogVisible = true">
      调用合约测试
    </el-button>
  
    <el-dialog
      v-model="centerDialogVisible"
      title="提示"
      width="500"
      align-center
    >
      <span>即将发起合约调用</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  import axios from 'axios';
  const centerDialogVisible = ref(false)
  </script>
  
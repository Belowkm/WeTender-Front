<template>
    <div class="admin-backend">
        <el-button type="danger" @click="goToBackend">
            前往Super管理员界面
        </el-button>
    </div>
</template>
<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
const goToBackend = () => {
    ElMessageBox.confirm('前往Super管理员界面前，请确认拥有管理员账号和密码。', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
    })
        .then(() => {
            window.open('http://47.106.226.160:5000/')
        })
}
</script>
<style></style>
<template>
    <div class="admin-backend">
        <el-button type="danger" @click="goToBackend">前往Super管理员界面</el-button>
        <el-tooltip effect="dark" content="当用户异常时，可使用此功能进行重置" placement="top">
        <el-button type="warning" @click="ResetUsers" disabled>重置所有用户信息</el-button>
    </el-tooltip>
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
const ResetUsers = () => {
    ElMessageBox.confirm('请注意，该操作将导致所有用户数据被清空，是否继续？', '警告', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
    })
        .then(() => {
            ElMessage.success('重置成功')
        })
};
</script>
<style>
.admin-backend {
    margin: 20px;
}

.admin-backend button {
    margin: 10px;
}

.admin-backend button:disabled {
    cursor: not-allowed;
}
</style>
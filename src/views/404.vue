<template>
    <el-result title="404" sub-title="网页走丢了">
        <template #icon>
            <img src="../assets/404.jpg" alt="404" style="width: 200px;" />
        </template>
        <template #extra>
            <el-button type="primary" @click="goToHome">返回首页</el-button>
        </template>
    </el-result>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToHome = () => {
    router.push('/')
}
</script>
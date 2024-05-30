<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        :ellipsis="false">
        <el-menu-item index="0">
            <img style="width: 120px" src="@/assets/logo3.png" alt="logo" />
        </el-menu-item>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">仪表盘</el-menu-item>
        <el-menu-item index="3">关于</el-menu-item>
        <div class="flex-grow" />
        <div class="user">
            <el-button type="primary" @click="goToLogin">登录</el-button>
            <el-button type="primary" @click="goToRegister">注册</el-button>
        </div>
    </el-menu>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleSelect = (key: string) => {
    if (key === '1') {
        router.push('/')
    } else if (key === '2') {
        router.push('/dashboard')
    } else if (key === '3') {
        router.push('/about')
    }
    else if (key === '0') {
        router.push('/')
    }
    console.log(key)
}
const goToLogin = () => {
    router.push('/login')
}
const goToRegister = () => {
    router.push('/register')
}
</script>
<style>
.flex-grow {
    flex-grow: 1;
}

.user {
    display: flex;
    align-items: center;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
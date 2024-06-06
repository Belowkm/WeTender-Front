<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        :ellipsis="false">
        <el-menu-item index="0">
            <img style="width: 120px" src="@/assets/logo3.png" alt="logo" />
        </el-menu-item>
        <el-menu-item index="1">首页</el-menu-item>
        <el-sub-menu index="2" class="avatar-container">
            <template #title>
                <span>仪表盘</span>
            </template>
            <el-menu-item index="2-1">乡级政府</el-menu-item>
            <el-menu-item index="2-2">企业</el-menu-item>
            <el-menu-item index="2-3">县级政府</el-menu-item>
            <el-menu-item index="2-4" disabled>银行</el-menu-item>
        </el-sub-menu>
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
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    switch (key) {
        case '1':
            router.push('/')
            break;
        case '2-1':
            router.push('/dashboard/town_gov')
            break;
        case '2-2':
            router.push('/dashboard/enterprise')
            break;
        case '2-3':
            router.push('/dashboard/county_gov')
            break;
        case '2-4':
            router.push('/dashboard/bank')
            break;
        case '3':
            router.push('/about')
            break;
        default:
            break;
    }
    activeIndex.value = key
    console.log(key, keyPath);

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
<template>
    <div class="home">
        <div class="home-header">
            <div class="home-header-left">
                <img src="../assets/logo.png" alt="">
                <div class="home-header-title">
                    <span class="home-header-title-text">WeTender招标项目管理平台</span>
                </div>
            </div>
            <div class="home-header-right">
                <el-button type="primary" link @click="goToLogin">登录</el-button>
                <el-button type="primary" link @click="goToRegister">注册</el-button>
            </div>
            <div class="home-header-user">

            </div>
            <div class="home-header-menu">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1" @click="home">首页</el-menu-item>
                    <el-menu-item index="2" @click="dashboard">仪表盘</el-menu-item>
                    <el-menu-item index="3" @click="about">关于</el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        home() {
            this.$router.push('/home')
        },
        dashboard() {
            this.$router.push('/dashboard')
        },
        about() {
            this.$router.push('/about')
        },
        goToLogin() {
            this.$router.push('/login')
        },
        goToRegister() {
            this.$router.push('/register')
        }

    },
    mounted() {
        console.log(this.$route.path);
    }
}
</script>
<style lang="ts" scoped>
</style>
<template>
    <div class="app-container">
        <div class="app-header">
            <div class="app-header-title">
                <img src="../../assets/logo.png" alt="">
                <span class="app-header-title-text">WeTender管理平台</span>
            </div>
            <div class="app-header-login">
                <ul>
                    <li><router-link to="/login">登录</router-link></li>
                    <li><router-link to="/register">注册</router-link></li>
                </ul>
            </div>
        </div>
        <div class="app-main">
            <button type="home" @click="home">首页</button>
            <button type="dash" @click="dashboard">仪表盘</button>
        </div>
        <div class="app-footer">
            <div class="app-footer-text">
                <span class="app-footer-text-title">WeTender招标项目管理平台<br></span>
                <span class="app-footer-text-content">Copyright © 2024 WeTender. All rights reserved.</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    methods: {
        home() {
            this.$router.push('/home')
        },
        dashboard() {
            this.$router.push('/dashboard')
        }
    },
    mounted() {
        console.log(this.$router)
    }
}
</script>
<style>
.app-container {
    width: 100%;
}
</style>
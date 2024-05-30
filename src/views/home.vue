<template>
    <el-container>
        <el-header class="home-header">
            <Header/>
        </el-header>
        <el-main>
            <h1>Main</h1>
        </el-main>
        <el-footer class="home-footer">
            <h1>Copyright © 2024 <span><a href="https://github.com/Belowkm/WeTender-Front"
                        target="_blank">WeTender团队</a></span> 版权所有</h1>
        </el-footer>
    </el-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/layouts/Header.vue'
const router = useRouter()
const activeIndex = ref('1')
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
.home-header {
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    z-index: 3000;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 20px;
    margin: 0 auto;
    overflow: hidden;
}
.home-footer {
    position: fixed;
    z-index: 3000;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    font-size: 12px;
    color: #999;
    a {
        color: #999;
    }
    span {
        margin: 0 5px;
    }
    a:hover {
        color: #409EFF;
    }
    a:active {
        color: #409EFF;
    }
}
</style>
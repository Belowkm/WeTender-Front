<template>
    <el-container>
        <el-header class="header">
            <Header />
        </el-header>
        <el-main class="main">
            <router-view />
        </el-main>
        <el-footer class="footer">
            <Footer />
        </el-footer>
    </el-container>
</template>
<script lang="ts" setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>
<style lang="scss" scoped>
.header {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 20px;
    margin: 0 auto;
    overflow: hidden;
}
.footer {
    position: fixed;
    bottom: -1%;
    left: 40%;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    font-size: 10px;
    color: #999;
}
</style>
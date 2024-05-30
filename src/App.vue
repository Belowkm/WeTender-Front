<template>
    <el-container>
        <el-header class="header">
            <Header />
        </el-header>
        <el-main>
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
<style>
.header {
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

.footer {
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
<template>
    <div class="homeView">
        <h1>这里会放一个主页</h1>
    </div>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus';
ElMessage.warning('登录功能暂未开发完成，请直接使用仪表盘')
</script>
<style>
.homeView {
    justify-content: center;
    align-items: center;
    z-index: 3000;
    left: 0;
    right: 0;
    margin-top: 30px;
    text-align: center;
    position: fixed;
}
</style>
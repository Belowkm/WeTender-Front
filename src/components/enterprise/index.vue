<template>
    <el-container>
        <el-aside class="enterprise_aside">
            <Aside />
        </el-aside>
        <el-main class="enterprise_main">
            <router-view/>
        </el-main>
    </el-container>
</template>
<script lang="ts" setup>
import Aside from './Aside.vue';
</script>
<style>
.enterprise_aside {
    width: 200px;
    position: fixed;
    top: 60px;
    left: 0;
}

.enterprise_main {
    top: 100px;
    left: 400px;
    position: fixed;
}
</style>
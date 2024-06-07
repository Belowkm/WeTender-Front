<template>
    <el-container>
        <el-aside class="county_aside">
            <Aside />
        </el-aside>
        <el-main class="county_main">
            <router-view />
        </el-main>
    </el-container>
</template>
<script lang="ts" setup>
import Aside from './Aside.vue';
</script>
<style>
.county_aside {
    width: 200px;
    position: fixed;
    top: 60px;
    left: 0;
}

.county_main {
    top: 100px;
    left: 400px;
    position: fixed;
}
</style>
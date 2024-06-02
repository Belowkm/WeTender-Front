<template>
    <el-container>
        <el-aside width="200px" class="enterprise_aside">
            <Aside />
        </el-aside>
        <el-main class="enterprise_main">
            <router-view />
        </el-main>
    </el-container>
</template>
<script lang="ts" setup>
import Aside from './Aside.vue';
</script>
<style>
.enterprise_aside {
    overflow: hidden;
}
</style>
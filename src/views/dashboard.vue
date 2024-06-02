<template>
    <el-container class="dashboard">
        <el-aside width="200px">
            <Aside />
        </el-aside>
        <el-main>
            <router-view />
        </el-main>
    </el-container>
</template>
<script lang="ts" setup>
import Aside from '../components/Aside.vue'
</script>
<style>

</style>
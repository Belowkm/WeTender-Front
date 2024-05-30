<template>
    <div class="HomeView">
        <h1>请选择一个用户</h1>
    <el-button type="primary" @click="Town_gov">乡级政府</el-button>
    <el-button type="primary" @click="Enterprise">企业</el-button>
    <el-button type="warning" @click="County_gov">县级政府</el-button>
    <el-button disabled type="info">银行</el-button>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const Town_gov = () => {
    router.push('/dashboard/Town_gov');
};
const Enterprise = () => {
    router.push('/dashboard/Enterprise');
};
const County_gov = () => {
    router.push('/dashboard/County_gov');
};
</script>
<style>
.HomeView {
    text-align: center;
    padding: 100px 0;
};
</style>
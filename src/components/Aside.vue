<template>
    <div class="Aside">
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect">
            <el-menu-item index="1">
                <template #title>
                    <i class="el-icon-menu"></i>
                    <span>数据概览</span>
                </template>
            </el-menu-item>
            <el-menu-item index="2">
                <template #title>
                    <i class="el-icon-document"></i>
                    <span>项目管理</span>
                </template>
            </el-menu-item>
            <el-menu-item index="3">
                <template #title>
                    <i class="el-icon-setting"></i>
                    <span>预算管理</span>
                </template>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    if (key === '1') {
        useRouter().push('/dashboard')
    }
    console.log(key, keyPath)
}
</script>
<style></style>
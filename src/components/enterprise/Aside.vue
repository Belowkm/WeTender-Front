<template>
    <div class="Aside">
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect">
            <el-menu-item index="1">
                <template #title>
                    <el-icon>
                        <House />
                    </el-icon>
                    <span>数据概览</span>
                </template>
            </el-menu-item>
            <el-menu-item index="2">
                <template #title>
                    <el-icon>
                        <Menu />
                    </el-icon>
                    <span>项目管理</span>
                </template>
            </el-menu-item>
            <el-menu-item index="3">
                <template #title>
                    <el-icon>
                        <Histogram />
                    </el-icon>
                    <span>资产管理</span>
                </template>
            </el-menu-item>
            <el-menu-item index="4" disabled>
                <template #title>
                    <el-icon>
                        <Document />
                    </el-icon>
                    <span>合同管理</span>
                </template>
            </el-menu-item>
            <el-menu-item index="5" disabled>
                <template #title>
                    <el-icon>
                        <OfficeBuilding />
                    </el-icon>
                    <span>外包管理</span>
                </template>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { House, Menu, Document, Histogram, OfficeBuilding } from '@element-plus/icons-vue'
const activeIndex = ref('1')
const router = useRouter()
const handleSelect = (key, keyPath) => {
    if (key === '1') {
        router.push('/dashboard/enterprise/overview')
    }
    else if (key === '2') {
        router.push('/dashboard/enterprise/project')
    }
    else if (key === '3') {
        router.push('/dashboard/enterprise/Assets')
    }
    else if (key === '4') {
        router.push('/dashboard/enterprise/contract')
    }
    else if (key === '5') {
        router.push('/dashboard/enterprise/outsource')
    }
    else {
        router.push('/dashboard/enterprise/overview')
    }
    console.log(key, keyPath)
}
</script>
<style>
.Aside {
    width: 200px;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #e6e6e6;
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 999;

}
</style>
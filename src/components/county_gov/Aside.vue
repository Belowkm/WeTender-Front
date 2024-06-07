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
                        <Operation />
                    </el-icon>
                    <span>预算管理</span>
                </template>
            </el-menu-item>
            <el-menu-item index="4" disabled @click.prevent="showAlarm">
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
                        <Location />
                    </el-icon>
                    <span>下辖组织</span>
                </template>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts" setup>
import { Document, House, Location, Menu, Operation } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const activeIndex = ref('1')
const router = useRouter()
const handleSelect = (key, keyPath) => {
    if (key === '1') {
        router.push('/dashboard/county_gov/overview')
    }
    else if (key === '2') {
        router.push('/dashboard/county_gov/project')
    }
    else if (key === '3') {
        router.push('/dashboard/county_gov/budget')
    }
    else if (key === '4') {
        router.push('/dashboard/county_gov/contract')
    }
    else if (key === '5') {
        router.push('/dashboard/county_gov/sub_gov')
    }
    else {
        router.push('/dashboard/county_gov/overview')
    }
    console.log(key, keyPath)
}

const showAlarm = () => {
    ElMessage.warning('该功能暂未开放，敬请期待！');
}
</script>
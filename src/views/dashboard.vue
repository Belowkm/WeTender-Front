<template>
    <el-container class="dashboard">
        <el-aside width="200px">
            <el-menu>
                <el-menu-item>数据概览</el-menu-item>
                <el-sub-menu>
                    <template #title>
                        <i class="el-icon-menu"></i>
                        乡级政府界面
                    </template>
                    <el-menu-item>
                        <i class="el-icon-menu"></i>
                        
                    </el-menu-item>
                </el-sub-menu>
                <el-sub-menu>
                    <template #title>
                        <i class="el-icon-menu"></i>
                        县级政府界面
                    </template>
                </el-sub-menu>
                <el-sub-menu>
                    <template #title>
                        <i class="el-icon-menu"></i>
                        企业界面
                    </template>
                </el-sub-menu>
                <el-sub-menu>
                    <template #title>
                        <i class="el-icon-menu"></i>
                        银行界面
                    </template>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-main>
            
        </el-main>
    </el-container>
</template>
<script lang="ts" setup>
</script>
<style>
.dashboard {
    position: fixed;
    width: 100%;
    z-index: 3000;
    top: 60px;
    left: 0;
    right: 0;
    margin: 0 auto;
    overflow: hidden;
}
</style>
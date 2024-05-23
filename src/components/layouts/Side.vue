<template>
    <el-menu class="el-menu-vertical-demo" :default-active="$route.path" router>
        <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/deals">
            <i class="el-icon-document"></i>
            <span slot="title">项目管理</span>
        </el-menu-item>
        <el-menu-item index="/user">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="/role">
            <i class="el-icon-s-custom"></i>
            <span slot="title">角色管理</span>
        </el-menu-item>
        <el-menu-item index="/permission">
            <i class="el-icon-s-tools"></i>
            <span slot="title">权限管理</span>
        </el-menu-item>
    </el-menu>
    <el-button type="primary" icon="el-icon-s-tools" @click="logout">退出</el-button>
    
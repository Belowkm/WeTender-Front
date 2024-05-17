<template>
    <div class="app-container">
      <div class="app-header">
        <div class="app-header-title">
          <img src="../../assets/logo.png" alt="">
          <span class="app-header-title-text">WeTender管理平台</span>
        </div>
        <div class="app-header-login">
          <ul>
            <li><router-link to="/login">登录</router-link></li>
            <li><router-link to="/register">注册</router-link></li>
          </ul>
        </div>
        <div class="app-header-user">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img src="../../assets/user.png" alt="">
              <span class="app-header-user-name">{{ userName }}</span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span @click="logout" style="display:block;">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="app-main">
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <ul><router-link to="/home">首页</router-link></ul>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <ul><router-link to="/document">数据统计</router-link></ul>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <ul><router-link to="setting">设置</router-link></ul>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="app-footer">
        <div class="app-footer-text">
          <span class="app-footer-text-title">WeTender招标项目管理平台<br></span>
          <span class="app-footer-text-content">Copyright © 2024 WeTender. All rights reserved.</span>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'Home'
  }
  </script>
  <style lang="scss" scoped>


  </style>
<template>
    <el-menu class="header" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="home" @click="goToHome">首页</el-menu-item>
        <el-menu-item index="dashboard" @="goToDashboard">仪表盘</el-menu-item>
        <el-menu-item index="about" @="goToAbout">关于</el-menu-item>
        <el-menu-item index="login" v-if="!user" @="goToLogin">登录</el-menu-item>
        <el-menu-item index="register" v-if="!user" @="goToRegister">注册</el-menu-item>
        <el-menu-item index="logout" v-if="user" @="logout">退出</el-menu-item>
        <el-menu-item index="user" v-if="user">
            <el-dropdown>
                <span class="el-dropdown-link">
                    {{user.username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <el-button type="text" @click="goToUser">个人中心</el-button>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-button type="text" @click="logout">退出</el-button>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu-item>
    </el-menu>

</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'Header',
    computed: {
        ...mapState(['user'])
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        },
        /*
          * 跳转至仪表盘
          */
        goToDashboard() {
            this.$router.push({
                name: 'dashboard'
            })
        },
        /*
          * 跳转至首页
          */
        goToHome() {
            this.$router.push({
                name: 'home'
            })
        },
        /*
          * 跳转至登录页
          */
        goToLogin() {
            this.$router.push({
                name: 'login'
            })
        },
        /*
          * 跳转至注册页
          */
        goToRegister() {
            this.$router.push({
                name: 'register'
            })
        },
        /*
          * 跳转至关于页
          */
        goToAbout() {
            this.$router.push({
                name: 'about'
            })
        },
        /*
          * 跳转至个人中心
          */
         goToUser() {
            this.$router.push({
                name: 'user'
            })
        }
    },
    data() {
        return {
            isLogin: false
        }
    },
    mounted() {
        this.isLogin = this.user.isLogin
    },
    created() {
        this.isLogin = this.user.isLogin
    },
    /*
      * 监听登录状态
      */
    watch: {
        user(newVal, oldVal) {
            this.isLogin = newVal.isLogin
        }
    },
    created() {
        this.isLogin = this.user.isLogin
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/config.scss";
@import "../../assets/scss/mixin.scss";

.header {
    @include boxShadow(0, 2px, 8px, rgba(0, 0, 0, 0.05));
}

.header-wrap {
    @include flex();
    height: 60px;
    background: $color-theme;
}

.header-logo {
    @include flex();
    width: 200px;
    height: 60px;

    img {
        width: 40px;
        height: 40px;
        margin: 10px 10px 10px 20px;
    }

    span {
        font-size: 24px;
        color: $color-white;
        line-height: 60px;
        font-weight: bold;

        &:hover {
            cursor: pointer;
        }

        &:hover {
            color: $color-theme;
        }

        &.active {
            color: $color-theme;
        }
    }

    .header-logo-title {
        font-size: 24px;
        color: $color-white;
        line-height: 60px;
        font-weight: bold;

        &:hover {
            cursor: pointer;
        }

        &:hover {
            color: $color-theme;
        }

        &.active {
            color: $color-theme;
        }
    }
}
</style>
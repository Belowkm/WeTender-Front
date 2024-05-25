<template>
    <div class="home">
        <div class="home-header">
            <div class="home-header-left">
                <img src="../assets/logo3.png" alt="logo">
            </div>
            <div class="home-header-user">

            </div>
            <div class="home-header-menu">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1" @click="home">首页</el-menu-item>
                    <el-menu-item index="2" @click="dashboard">仪表盘</el-menu-item>
                </el-menu>
            </div>
            <div class="home-header-right">
                <el-button type="primary" link @click="goToLogin">登录</el-button>
                <el-button type="primary" link @click="goToRegister">注册</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        home() {
            this.$router.push('/home')
        },
        dashboard() {
            this.$router.push('/dashboard')
        },
        goToLogin() {
            this.$router.push('/login')
        },
        goToRegister() {
            this.$router.push('/register')
        }

    },
    mounted() {
        console.log(this.$route.path);
    }
}
</script>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
}

.home-header {
    width: 100%;
    height: 100px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
}

.home-header-left {
    display: flex;
    align-items: center;

    img {
        width: 100px;
        height: 50px;
    }
}

.home-header-title {
    margin-left: 20px;
}

.home-header-title-text {
    font-size: 20px;
    font-weight: bold;
}

.home-header-right {
    display: flex;
    align-items: center;
}

.home-header-user {
    display: flex;
    align-items: center;
}

.home-header-menu {
    width: 100%;
}

.el-menu {
    border-bottom: none;
}

.el-menu-item {
    font-size: 20px;
}

.el-menu-item:hover {
    background-color: #fff;
}

.el-menu-item.is-active {
    background-color: #fff;
}

.el-menu-item.is-active:hover {
    background-color: #fff;
}

.el-menu-item:hover {
    background-color: #fff;
}
</style>
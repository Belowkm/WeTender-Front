<template>
    <div class="login">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-position="left" label-width="0px"
            class="demo-ruleForm login-container">
            <h3 class="title">WeTender</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="username" auto-complete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="password" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;" @click.native.prevent="login">登录</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="text" @click="register">注册</el-button>
                <el-button type="text" @click="forget">忘记密码</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="text" @click="goToHome">返回首页</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            console.log(this.username);
            this.$router.push('/');
            this.$store.commit('login', this.username);
            this.$store.commit('setUser', this.username);
            this.$message({
                message: '欢迎回来',
                type: 'success'
            });
            this.loginForm.username = '';
            this.loginForm.password = '';
            this.loginForm.rememberMe = false;
        },
        register() {
            this.$router.push('/register');
        },
        goToHome() {
            this.$router.push('/home');
        },
        forget() {
            this.$router.push('/forget');
        }
    }
}
</script>
<style>
.login-container {
    position: fixed;
    width: 400px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
}

.title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
    font-size: 24px;
    font-weight: 500;
    font-family: "微软雅黑";
    font-weight: bold;
    letter-spacing: 2px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    width: 100%;
    height: 40px;
}
</style>

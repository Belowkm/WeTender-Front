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
                <el-button type="info" style="width:100%;" @click.native.prevent="register">注册</el-button>
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
            this.$router.push('/home');
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
        }
    }
}
</script>
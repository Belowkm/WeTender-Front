<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    }
    name: "register"
    methods: {
        register() {
            this.$router.push('/register');
        }
    }
    if(this.username == '' || this.password == '')
    {
        this.$message({
            message: '用户名或密码为空',
            type: 'warning'
        });
    }
    else if (this.$sotre.state.user == this.username)
    {
        this.$message({
            message: '用户名已存在',
            type: 'warning'
        });
    }
    else
    {
        this.$message({
            message: '注册成功!',
            type: 'success'
        });
        this.$router.push('/login');
    }
}
</script>
<template>
    <div class="register-container">
        <el-form :model="registerForm" :rules="rules" ref="registerForm" label-position="left" label-width="0px" class="card-box login-form">
            <h3 class="title">注册</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="registerForm.username" auto-complete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="请再次输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="register">注册</el-button>
                <el-button @click="login">登录</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
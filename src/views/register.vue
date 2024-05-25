<template>
    <div class="register">
        <div class="register-title">账号注册</div>
        <el-form :model="registerForm" :rules="registerRules" ref="registerForm" label-width="100px"
            class="register-form">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="registerForm.checkPass"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="register">注册</el-button>
                <el-button @click="goToLogin">已有账号？去登录</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="text" @click="goToHome">返回首页</el-button>
            </el-form-item>
        </el-form>
        <el-dialog title="注册成功" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <el-button type="primary" @click="goToLogin">去登录</el-button>
        </el-dialog>
        <el-dialog title="注册失败" :visible.sync="dialogVisible2" width="30%" :before-close="handleClose">
            <el-button type="primary" @click="goToRegister">重新注册</el-button>
        </el-dialog>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Register',
    data() {
        return {
            registerForm: {
                username: '',
                password: ''
            },
            registerRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ],
                checkPass: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ]
            },
            dialogVisible: false,
            dialogVisible2: false,
        }
    },
    methods: {
        goToLogin() {
            this.$router.push('/login')
        },
        goToHome() {
            this.$router.push('/home')
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done()
                })
                .catch(_ => { })
        }
    }
}
</script>

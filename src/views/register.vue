<template>
    <div class="register">
        <el-form :model="registerForm" :rules="registerRules" ref="registerForm" label-width="100px"
            class="register-form">
            <h3 class="title">账户注册</h3>
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
    </div>
</template>
<script lang="ts" setup>
import axios from 'axios'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const Msg = '注册功能暂未开发完成，请在主页选择用户使用'
ElMessage.warning(Msg)

const router = useRouter();
const registerForm = ref({
    username: '',
    password: '',
    checkPass: ''
});
const registerRules = ref({
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
});
const dialogVisible = ref(false);
const dialogVisible2 = ref(false);
const goToLogin = () => {
    router.push('/login');
};
const goToHome = () => {
    router.push('/');
};
const checkPass = () => {
    if (registerForm.value.password !== registerForm.value.checkPass) {
        ElMessage.error('两次输入密码不一致');
        return false;
    }
    return true;
};
const checkUsername = () => {
    if (registerForm.value.username === '') {
        ElMessage.error('用户名不能为空');
        return false;
    }
    return true;
};
const checkPassword = () => {
    if (registerForm.value.password === '') {
        ElMessage.error('密码不能为空');
        return false;
    }
    return true;
};
const check = () => {
    if (checkUsername() && checkPassword() && checkPass()) {
        return true;
    }
    return false;
};
const register = () => {
    ElMessage.error(Msg);
    /// if (check()) {
    ///    axios.post('/api/register', {
    ///        username: registerForm.value.username,
    ///        password: registerForm.value.password
    ///    }).then((res) => {
    ///        if (res.data.code === 200) {
    ///            dialogVisible.value = true;
    ///        } else {
    ///            dialogVisible2.value = true;
    ///        }
    ///    });
    ///}
};
</script>
<style>
.register-form {
    position: fixed;
    width: 400px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
}

.title {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    border-bottom: 1px solid #eee;
}

.register {
    margin-top: 100px;
    margin-bottom: 100px;
}
</style>
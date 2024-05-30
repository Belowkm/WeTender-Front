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
<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
ElMessage.warning('登录功能暂未开发完成，请直接使用仪表盘');

const username = ref('');
const password = ref('');
const router = useRouter();
const login = () => {
    ElMessage.error('登录功能暂未开发完成，请直接使用仪表盘');
};
const goToHome = () => {
    router.push('/');
};
const register = () => {
    router.push('/register');
};
const forget = () => {
    router.push('/forget');
};
const rules = {
    username: [
        {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
        },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
        },
    ],
};
const loginForm =
{
    username: '',
    password: '',
};
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

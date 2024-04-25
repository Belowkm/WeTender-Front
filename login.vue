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
            this.$store.commit('setToken', '123456');
            this.$store.commit('setRole', 'admin');
            this.$store.commit('setAvatar', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif');
            this.$store.commit('setIntroduction', 'I am a super administrator');
            this.$router.push('/');
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
<template>
    <div class="login">
        <h2>WeTender</h2>
        <form @submit.prevent="handleSubmit">
            <label for="username">用户名</label>
            <input id="text" v-model="username" required />
            <br>
            <label for="password">密码</label>
            <input type="password" v-model="password" required />
            <br>
            <button type="submit">登录</button>
        </form>
    </div>
</template>
<style scoped>
.login {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #f8f8f8;
    box-sizing: border-box;
    margin-top: 100px;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    outline: none;
    text-align: center;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
    font-size: 14px;
    line-height: 1.5;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    outline: none;
    transition: all 0.3s ease;
}

button {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}
</style>
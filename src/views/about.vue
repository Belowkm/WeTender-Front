<template>
    <div class="test">
    <span>这是一个测试界面</span>
    <br>
        <el-button @click="show = !show">点击按钮</el-button>

        <div style="display: flex; margin-top: 20px; height: 100px">
            <transition name="el-fade-in-linear">
                <div v-show="show" class="transition-box">WeTender</div>
            </transition>
            <transition name="el-fade-in">
                <div v-show="show" class="transition-box">学生团队</div>
            </transition>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(true)
</script>

<style>
.test{
    position: fixed;
    top: 40%;
    left: 40%;
}
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}

</style>
<template>
    <div>
        <el-button @click="show = !show">Click Me</el-button>

        <div style="display: flex; margin-top: 20px; height: 100px">
            <transition name="el-fade-in-linear">
                <div v-show="show" class="transition-box">.el-fade-in-linear</div>
            </transition>
            <transition name="el-fade-in">
                <div v-show="show" class="transition-box">.el-fade-in</div>
            </transition>
        </div>
    </div>
    <div>
        <el-button @click="goToHome">返回首页</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(true)
const goToHome = () => {
    window.location.href = '/home'
}
</script>

<style>
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
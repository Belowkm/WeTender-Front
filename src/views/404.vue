<template>
    <div class="not-found">
        <div class="not-found-content">
            <div class="not-found-content-title">
                <img src="../assets/404.jpg" alt="404">
                <div class="not-found-content-title-text">
                    <div class="not-found-content-title-text-title">
                        404
                    </div>
                    <div class="not-found-content-title-text-subtitle">
                        网页走丢了
                    </div>
                    <div class="not-found-content-title-text-button">
                        <el-button type="primary" @click="goToHome">返回首页</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToHome = () => {
    router.push('/home')
}
</script>
<style>
.not-found-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.not-found-content-title {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 200px;
        height: 200px;
    }
}

.not-found-content-title-text {
    margin-left: 20px;
}

.not-found-content-title-text-title {
    font-size: 50px;
    font-weight: bold;
}

.not-found-content-title-text-subtitle {
    font-size: 15px;
    color: #999;
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
}

.not-found-content-title-text-button {
    margin-top: 20px;
}

.not-found-footer {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    font-size: 12px;

    a {
        color: #409EFF;
    }

    a:hover {
        color: #777;
    }

    span {
        margin: 0 5px;
    }
}
</style>
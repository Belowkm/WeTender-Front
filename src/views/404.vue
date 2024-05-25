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
        <div class="not-found-footer">
            <div class="not-found-footer-text">
                Copyright © 2024 <span><a href="https://github.com/Belowkm/WeTender-Front"
                        target="_blank">WeTender团队</a></span> 版权所有
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NotFound',
    methods: {
        goToHome() {
            this.$router.push('/home')
        }
    }
}
</script>
<style lang="scss" scoped>
.not-found {
    width: 100%;
}

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
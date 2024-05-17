<template>
    <div class="404">
        <div class="error-page">
            <div class="error-desc">{{ msg }}</div>
            <div class="error-handle">
                <i class="el-icon-menu"></i>
                <ul><router-link to="/home">返回首页</router-link></ul>        
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: '404',
    data() {
        return {
            msg: '404'
        }
    }
}
</script>
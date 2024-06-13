<template>
    <div class="budget-table">
        <span>乡级政府2024年预算情况</span>
        <el-table v-loading="Loading" :element-loading-text="'正在加载'" class="list" :data="tableData" border>
            <el-table-column prop="balance" label="本年度预算" />
            <el-table-column prop="rev" label="剩余预算" />
            <el-table-column prop="used" label="年度支出" />
        </el-table>
        <el-button class="add_rev" type="primary" @click="handleClick">设置预算</el-button>
    </div>
</template>
<script lang="ts" setup>
import { Loading } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { ref } from 'vue';
import { getBal, getRev } from '@/api/town_gov/getBudget';
const handleClick = () => {
    ElMessageBox.prompt('请输入本年度预算', '设置预算', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',+
        
        inputPattern: /[0-9]/,
        inputErrorMessage: '请输入数字',
    })
        .then(() => {
            ElMessageBox.confirm('请注意，该操作将覆盖当前预算！', '提示', {
                confirmButtonText: '确认',
                cancelButtonText: "取消",
                type: 'warning',
            })
                .then(() => {
                    ElMessage({
                        type: 'success',
                        message: '设置预算成功！',
                    });
                })
                .catch(() => {
                    ElMessage({
                        type: 'info',
                        message: '设置预算取消！',
                    });
                });
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '设置预算取消！',
            });
        });
}
</script>
<style lang="scss" scoped>
.budget-table {
    top: calc(10% + 60px);
    left: calc(10% + 200px);
    right: 10%;
    position: fixed;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;

    span {
        font-size: 20px;
        font-weight: bold;
    }

}

.list {
    margin-top: 20px;
}

.add_rev {
    margin-top: 20px;
}
</style>
<template>
    <div class="budget-table">
        <span>县级政府2024年预算情况</span>
        <el-table class="list" :data="tableData" border>
            <el-table-column prop="balance" label="本年度预算" />
            <el-table-column prop="rev" label="剩余预算" />
            <el-table-column prop="rev" label="年度支出" />
        </el-table>
        <el-button class="add_rev" type="primary" @click="handleClick">设置预算</el-button>
    </div>
</template>
<script lang="ts" setup>
import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
///const url = 'http://localhost:5003/WeBASE-Transaction/trans/send';
/*const dataset = {
    "groupId": 1,
    "uuidStateless": "XXX",
    "uuidDeploy": "XXX",
    "signType": 2,
    "contractAddress": "0x0e0d7d4993454c33390885e1c70216a5e1e1f3b4",
    "contractAbi": [{ "constant": true, "inputs": [], "name": "bank_name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "ProjectID", "type": "uint256" }, { "name": "Sender", "type": "address" }, { "name": "Receiver", "type": "address" }, { "name": "money", "type": "int256" }, { "name": "Timestamp", "type": "uint256" }, { "name": "TransferID", "type": "string" }, { "name": "remark", "type": "string" }], "name": "insert", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "bank_id", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "ProjectID", "type": "uint256" }], "name": "select", "outputs": [{ "name": "", "type": "uint256" }, { "components": [{ "name": "Sender", "type": "address" }, { "name": "Receiver", "type": "address" }, { "name": "money", "type": "int256" }, { "name": "Timestamp", "type": "uint256" }, { "name": "TransferID", "type": "string" }, { "name": "remark", "type": "string" }], "name": "", "type": "tuple[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "name", "type": "string" }, { "name": "id", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "tName", "type": "string" }, { "indexed": false, "name": "ProjectID", "type": "uint256" }, { "indexed": false, "name": "Sender", "type": "address" }, { "indexed": false, "name": "Receiver", "type": "address" }, { "indexed": false, "name": "money", "type": "int256" }, { "indexed": false, "name": "Timestamp", "type": "uint256" }, { "indexed": false, "name": "TransferID", "type": "string" }, { "indexed": false, "name": "remark", "type": "string" }], "name": "insertTable", "type": "event" }],
    "funcName": "bal",
    "funcParam": [],
    "signUserId": "28f31286ddeb40798096c40cef5ef1c3"
}
const tableData = {
    balance: 0,
    rev: 0,
    getData() {
        axios.post(url, dataset).then(res => {
            console.log(res.data.data)
            this.balance = res.data.data
        })
    }
}
    */
const tableData = [
    {
        balance: 0,
        rev: 0,
    },
]
const handleClick = () => {
    ElMessageBox.prompt('请输入本年度预算', '设置预算', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[0-9]/,
        inputErrorMessage: '请输入数字',
    })
        .then(() => {
            ElMessageBox.confirm('请注意，该操作将覆盖当前预算！', '提示', {
                confirmButtonText: '确认',
                cancelButtonText: "取消",
                type: 'warning',
            })
                .then(({ value }) => {
                    ElMessage({
                        type: 'success',
                        message: `设置预算成功！`,
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
    /*
axios.post(url, dataset).then(res => {
    console.log(res.data.data)
    this.balance = res.data.data
})
*/
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
<template>
    <div class="project-container">
        <span>乡级政府项目列表</span>
        <el-table :data="projects" :row-key="(row) => row.id" :default-expand-all="true"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">

            <el-table-column label="项目编号" prop="id" width="150">
                <template #default="scope">
                    <el-link type="primary" @click="handleClick(scope.row)">{{ scope.row.id }}</el-link>
                </template>
            </el-table-column>
            <el-table-column label="项目名称" prop="name" width="200">
                <template #default="scope">
                    <el-link type="primary" @click="handleClick(scope.row)">{{ scope.row.name }}</el-link>
                </template>
            </el-table-column>
            <el-table-column label="项目状态" prop="status" width="150">
                <template #default="scope">
                    {{ scope.row.status }}
                </template>
            </el-table-column>
            <el-table-column label="创建时间" prop="created_at" width="200">
                <template #default="scope">
                    {{ scope.row.created_at }}
                </template>
            </el-table-column>
            <el-table-column label="更新时间" prop="updated_at" width="200">
                <template #default="scope">
                    {{ scope.row.updated_at }}
                </template>
            </el-table-column>
            <el-table-column label="项目哈希" prop="contract_hash" width="200">
                <template #default="scope">
                    {{ scope.row.contract_hash }}
                </template>
            </el-table-column>
            <el-table-column label="操作" width="100">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="handleClick(scope.row)">查看</el-button>
                </template>
            </el-table-column>
            <template #empty>
                <el-empty description="暂无数据" />
            </template>
        </el-table>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
///import { getProjects } from '@/api/project'
const router = useRouter()
const projects = ref([])
///const getProjectsData = async () => {
/// const res = await getProjects()
///if (res.code === 200) {
///   projects.value = res.data
///} else {
/// ElMessage.error(res.message)
///}
///}
const handleClick = (row: any) => {
    router.push({ name: 'project', params: { id: row.id } })
}
</script>
<style>
.project-container {
    left: 210px;
    top: 70px;
    bottom: 10px;
    right: 10px;
    position: fixed;
    overflow: auto;
    box-sizing: border-box;
    text-align: center;

    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;

    span {
        font-size: 20px;
        font-weight: bold;
    }
}

.project-container .el-table {
    height: 85%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left:20px;
    margin-right:20px;
    text-align: center;
    border-radius: 10px;
    font-weight: bold;
}
</style>
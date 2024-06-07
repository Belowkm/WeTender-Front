<template>
    <div class="project-container">
        <div class="title-container">
            <span>乡级政府项目列表</span>
        </div>
        <div class="add-container">
            <el-icon></el-icon>
            <el-button type="primary" @click="addProject">
                <el-icon>
                    <CirclePlus />
                </el-icon>
                <span>创建项目</span>
            </el-button>
            <el-button type="primary" @click="exportExcel" disabled>
                <el-icon>
                    <Download />
                </el-icon>
                <span>导出Excel</span>
            </el-button>
        </div>
        <div class="table-container">
            <el-table :data="projects" :row-key="(row) => row.id" :default-expand-all="true"
                :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
                <el-table-column label="项目编号" prop="id" width="150">
                    <template #default="scope">
                        {{ scope.row.id }}
                    </template>
                </el-table-column>
                <el-table-column label="项目名称" prop="name" width="200">
                    <template #default="scope">
                        {{ scope.row.name }}
                    </template>
                </el-table-column>
                <el-table-column label="项目状态" prop="status" width="150">
                    <template #default="scope">
                        <el-tag v-if="scope.row.status === '0'" type="info">已立项</el-tag>
                        <el-tag v-else-if="scope.row.status === '1'" type="default">已招标</el-tag>
                        <el-tag v-else-if="scope.row.status === '2'" type="warning">施工中</el-tag>
                        <el-tag v-else-if="scope.row.status === '3'" type="primary">已竣工</el-tag>
                        <el-tag v-else-if="scope.row.status === '4'" type="plain">已验收</el-tag>
                        <el-tag v-else-if="scope.row.status === '5'" type="success">已投入使用</el-tag>
                        <el-tag v-else-if="scope.row.status === '6'" type="warning">售后修缮中</el-tag>
                        <el-tag v-else type="danger">异常终止</el-tag>
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
                        <span>{{ scope.row.contract_hash }}</span>
                        <el-tooltip class="box-item" effect="dark" content="复制" placement="top">
                            <el-icon @click="CopyHash(scope.row.contract_hash)">
                                <CopyDocument />
                            </el-icon>
                        </el-tooltip>
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
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { CirclePlus, CopyDocument, Download } from '@element-plus/icons-vue';
///import { getProjects } from '@/api/project'
const projects = ref([
    {
        id: '1',
        name: '项目1',
        status: '0',
        created_at: '2021-01-01 00:00:00',
        updated_at: '2021-01-01 00:00:00',
        contract_hash: '0x1234567890abcdef',
    },
    {
        id: '2',
        name: '项目2',
        status: '1',
        created_at: '2021-01-01 00:00:00',
        updated_at: '2021-01-01 00:00:00',
        contract_hash: '0x1234567890abcdef',
    },
    {
        id: '3',
        name: '项目3',
        status: '2',
        created_at: '2021-01-01 00:00:00',
        updated_at: '2021-01-01 00:00:00',
        contract_hash: '0x1234567890abcdef',
    },
    {
        id: '4',
        name: '项目4',
        status: '3',
        created_at: '2021-01-01 00:00:00',
        updated_at: '2021-01-01 00:00:00',
        contract_hash: '0x1234567890abcdef',
    },
    {
        id: '5',
        name: '项目5',
        status: '4',
        created_at: '2021-01-01 00:00:00',
        updated_at: '2021-01-01 00:00:00',
        contract_hash: '0x1234567890abcdef',
    },
    {
        id: '6',
        name: '项目6',
        status: '5',
        created_at: '2021-01-01 00:00:00',
        updated_at: '2021-01-01 00:00:00',
        contract_hash: '0x1234567890abcdef',
    },
    {
        id: '7',
        name: '项目7',
        status: '6',
        created_at: '2021-01-01 00:00:00',
        updated_at: '2021-01-01 00:00:00',
        contract_hash: '0x1234567890abcdef',
    },
    {
        id: '8',
        name: '项目8',
        status: '7',
        created_at: '2021-01-01 00:00:00',
        updated_at: '2021-01-01 00:00:00',
        contract_hash: '0x1234567890abcdef',
    }

])
///const getProjectsData = async () => {
/// const res = await getProjects()
///if (res.code === 200) {
///   projects.value = res.data
///} else {
/// ElMessage.error(res.message)
///}
///}
const handleClick = (row: any) => {
    console.log(row)
    console.log('click')
    console.log(row.id)
    window.open(`/project/town_gov/${row.id}`)
}
const addProject = () => {
    ElMessageBox.prompt('Please input your e-mail', '创建项目', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        inputPattern:
            /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email',
    })
        .then(({ value }) => {
            ElMessage({
                type: 'success',
                message: `Your email is:${value}`,
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Input canceled',
            })
        })
}
const CopyHash = (hash: string) => {
    navigator.clipboard.writeText(hash).then(() => {
        ElMessage({
            type: 'success',
            message: '复制成功',
        })
    })
}
</script>
<style>
.project-container {
    left: 210px;
    top: 70px;
    right: 10px;
    position: fixed;
    overflow: auto;
    box-sizing: border-box;

    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
}

.title-container {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}

.add-container {
    margin-bottom: 20px;
    text-align: center;
    display: flex;
    justify-content: right;
    align-items: center;
}

.table-container {
    margin-top: 20px;
    overflow: auto;
    height: calc(100vh - 300px);
    width: calc(100% - 40px);
    margin-bottom: 20px;
}
</style>
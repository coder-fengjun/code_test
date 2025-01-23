<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

interface CloudDesktop {
  id: string
  workspaceId: string
  status: string
  provider: string
  type: string
  version: string
  onlineStatus: string
  userId: string
}

const tableData = ref<CloudDesktop[]>([
  {
    id: '199c649a-91b7-441aac7a-3a6cc335f79e',
    workspaceId: 'e4d427ca-3c21-4b24-9598-317877a20f39',
    status: '运行中',
    provider: '阿里云',
    type: '云桌面 (沙盒)',
    version: '2.3.0.893',
    onlineStatus: '在线',
    userId: 'HWTADMIN001a'
  }
])

const platformOptions = ref([
  { label: '全部', value: 'all' },
  { label: '初始化', value: 'init' },
  { label: '空闲', value: 'idle' },
  { label: '占用', value: 'occupied' },
  { label: '维护', value: 'maintenance' }
])

const searchForm = ref({
  platform: '',
  transferCenter: '',
  workArea: '',
  cloudDesktopStatus: '',
  workOrder: ''
})

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(800)

const handleSizeChange = (val: number) => {
  pageSize.value = val
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
}
</script>

<template>
  <div class="cloud-desktop-container">
    <el-form :model="searchForm" class="search-form" inline>
      <el-form-item label="平台">
        <el-select v-model="searchForm.platform" placeholder="请选择">
          <el-option
            v-for="item in platformOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="调送接中心/部门/组别">
        <el-input v-model="searchForm.transferCenter" placeholder="请选择" />
      </el-form-item>
      <el-form-item label="员工">
        <el-input v-model="searchForm.workArea" placeholder="请选择" />
      </el-form-item>
      <el-form-item label="工号">
        <el-input v-model="searchForm.workOrder" placeholder="请选择" />
      </el-form-item>
      <el-form-item label="云桌面状态">
        <el-input v-model="searchForm.cloudDesktopStatus" placeholder="请选择" />
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column label="云桌面ID/名称" prop="id" />
      <el-table-column label="工作区ID/名称" prop="workspaceId" />
      <el-table-column label="云桌面状态" prop="status">
        <template #default="{ row }">
          <el-tag type="success">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="服务商" prop="provider" />
      <el-table-column label="规位类型" prop="type" />
      <el-table-column label="九方云版本/补丁版本" prop="version" />
      <el-table-column label="九天云状态/ID" prop="onlineStatus" />
      <el-table-column label="操作" width="200">
        <template #default="{ row }">
          <el-button type="primary" link>分配云桌面</el-button>
          <el-button type="primary" link>下载日志</el-button>
          <el-button type="primary" link>操作</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style scoped>
.cloud-desktop-container {
  padding: 20px;
}

.search-form {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
}

.pagination-container {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
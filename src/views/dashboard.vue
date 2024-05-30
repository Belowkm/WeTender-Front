<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Header from '@/components/layouts/Header.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

</script>
<style>
.home-header {
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 3000;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  margin: 0 auto;
  overflow: hidden;
}
</style>
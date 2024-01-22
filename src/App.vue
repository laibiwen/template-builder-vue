<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="left-menu">左侧菜单</div>
    <div class="right-component">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 12px 24px;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left-menu {
    width: 160px;
    height: 100%;
    flex-shrink: 0;
    border-right: 1px solid #eee;
  }
  .right-component {
    margin-left: 12px;
    height: 100%;
    width: 100%;
  }
}
</style>

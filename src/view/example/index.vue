<!-- 主题页面 -->
<template>
  <!-- 对文件夹其他文件做遍历,不在根组件不渲染 遍历节点 -->
  <div class="example-content">
    
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  
});
</script>

<style scoped lang="scss">
    .example-content {
        width:100vw;
        height: 100vh;
        margin:0;
        padding:0;
    }
</style>

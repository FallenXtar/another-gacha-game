<template>
  <el-container>
    <el-header><agg-header></agg-header></el-header>
    <el-main> <agg-main-frame></agg-main-frame></el-main>
    <el-footer> <agg-menu-bar></agg-menu-bar></el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AggHeader from "./components/AggHeader.vue";
import AggMainFrame from "./components/AggMainFrame.vue";
import AggMenuBar from "./components/AggMenuBar.vue";

export default defineComponent({
  name: "App",
  components: {
    AggMainFrame,
    AggMenuBar,
    AggHeader,
  },
});
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 98vh;
  width: 100%;
  margin: auto;
}

.el-container {
  height: 100%;
  flex-direction: column;
}
</style>

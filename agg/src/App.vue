<template>
  <el-container direction="vertical">
    <agg-header tab="this.currentTab"></agg-header>
    <agg-main-frame v-model:tab="home"></agg-main-frame>
    <agg-menu-bar></agg-menu-bar>
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
  data() {
    return {
      currentTab: "home",
    };
  },
});
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 795px;
  width: 360px;
  margin: auto;
}

.el-container {
  height: 100%;
}
</style>

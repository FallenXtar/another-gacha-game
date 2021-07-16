<template>
  <el-header>
    <h1>{{ title }}</h1>
  </el-header>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "AggHeader",

  computed: {
    title() {
      return this.$store.state.tab;
    },
  },
});
</script>

<style scoped>
.el-header {
  text-align: center;
}
h1 {
  margin: auto;
  color: #303133;
}
</style>

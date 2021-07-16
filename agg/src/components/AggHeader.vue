<template>
  <el-header>
    <h1>{{ tab }}</h1>
  </el-header>
</template>

<script>
export default {
  name: "AggHeader",

  props: {
    tab: String,
  },
  methods: {},
};
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

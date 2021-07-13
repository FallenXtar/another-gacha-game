<template>
  <ul>
    <li @click="settTabs(1)">
      <span class="el-icon-s-management b-btn">
        <span>收集</span>
      </span>
    </li>
    <li @click="settTabs(2)">
      <span class="el-icon-s-home b-btn">
        <span>主页</span>
      </span>
    </li>
    <li @click="settTabs(3)">
      <span class="el-icon-user-solid b-btn">
        <span>用户</span>
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import AggMainFrame from "./AggMainFrame.vue";
export default {
  name: "AggMenuBar",

  props: {},
  methods: {
    settTabs(n: number): void {
      AggMainFrame.setTabs(n);
    },
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  list-style: none;
  padding-left: 0;
}
li {
  float: left;
  width: 33.3%;
  text-align: center;
  height: 60px;
  margin-top: 0%;
}

.b-btn {
  font-size: 32px;
  margin-top: 6px;
  color: #606266;
}
.b-btn span {
  font-size: 16px;
  display: block;
}
</style>

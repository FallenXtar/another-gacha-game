<template>
  <el-footer>
    <ul>
      <li @click="this.$parent.tabSwitch(1)">
        <span class="el-icon-s-management b-btn">
          <span>收集</span>
        </span>
      </li>
      <li @click="this.$parent.tabSwitch(2)">
        <span class="el-icon-s-home b-btn">
          <span>主页</span>
        </span>
      </li>
      <li @click="this.$parent.tabSwitch(3)">
        <span class="el-icon-user-solid b-btn">
          <span>用户</span>
        </span>
      </li>
    </ul>
  </el-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AggMenuBar",

  props: {},
  methods: {},
});
</script>

<style scoped>
.el-footer {
  padding: 0 0;
}
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

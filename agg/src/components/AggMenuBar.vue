<template>
  <el-footer>
    <ul>
      <li @click="gotoTab('collection')">
        <span
          class="el-icon-s-management b-btn"
          :class="{ active: tab == 'collection' }"
        >
          <span>收集</span>
        </span>
      </li>
      <li @click="gotoTab('home')">
        <span class="el-icon-s-home b-btn" :class="{ active: tab == 'home' }">
          <span>主页</span>
        </span>
      </li>
      <li @click="gotoTab('user')">
        <span
          class="el-icon-user-solid b-btn"
          :class="{ active: tab == 'user' }"
        >
          <span>用户</span>
        </span>
      </li>
    </ul>
  </el-footer>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "AggMenuBar",

  computed: {
    tab() {
      return this.$store.state.tab;
    },
  },

  methods: {
    gotoTab(n) {
      this.$store.commit({
        type: "switchTab",
        target: n,
      });
    },
  },
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

.active {
  color: #409eff;
}
</style>

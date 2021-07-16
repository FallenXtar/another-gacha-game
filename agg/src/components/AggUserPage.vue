<template>
  <div class="user-info">
    <el-avatar icon="el-icon-user-solid"></el-avatar>
  </div>
  <ul>
    <li>注册/登录</li>
    <li>设置</li>
    <li>emmmmm</li>
  </ul>
</template>

<script>
export default {
  name: "AggUserPage",

  props: {},
  methods: {},
};
</script>

<style scoped>
.el-avatar {
  margin: auto;
  display: block;
}

ul {
  list-style: none;
  padding-left: 0;
}
li {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 20px 50px;
}
</style>

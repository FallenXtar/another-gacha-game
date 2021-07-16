<template>
  <el-avatar icon="el-icon-user-solid"> </el-avatar>
  <div class="user-info">
    <div class="user-name">{{ userInfo.name }}</div>
    <div class="user-id">{{ userInfo.id }}</div>
  </div>
  <div>
    <ul>
      <li v-for="item in menuTextList" :key="item">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AggUserPage",
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      menuTextList: [
        { text: "保存/读取" },
        { text: "设置" },
        { text: "emmmmm" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.el-avatar {
  margin: auto;
  display: block;
}

.user-info {
  text-align: center;
}

.user-name {
  color: #303133;
  margin: 10px auto;
}

.user-id {
  color: #909399;
  font-size: 50%;
}

ul {
  list-style: none;
  padding-left: 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
li {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 20px 50px;
}
</style>

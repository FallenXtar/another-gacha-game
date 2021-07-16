<template>
  <el-card :body-style="{ padding: '0px' }" shadow="always">
    <img :src="ins[0].img" />
  </el-card>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "AggCardFace",

  computed: {
    ins() {
      return this.$store.state.user.library;
    },
  },

  props: {},
  methods: {},
});
</script>

<style scoped>
.el-card {
  height: 90px;
  width: 60px;
  border: 2px solid #dcdfe6;
}

img {
  height: 100%;
  width: 100%;
}
</style>

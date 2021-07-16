<template>
  <div>收集页面</div>
  <el-space wrap>
    <agg-card-face v-for="item in 10" :key="item"></agg-card-face>
  </el-space>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AggCardFace from "./AggCardFace.vue";
export default defineComponent({
  name: "AggCollectionPage",
  components: {
    AggCardFace,
  },

  methods: {},
});
</script>

<style scoped></style>

<template>
  <el-main>
    <agg-collection-page v-if="tabs == 'collection'"></agg-collection-page>
    <agg-home-page v-if="tabs == 'home'"></agg-home-page>
    <agg-user-page v-if="tabs == 'user'"> </agg-user-page>
  </el-main>
</template>

<script>
import AggCollectionPage from "./AggCollectionPage.vue";
import AggHomePage from "./AggHomePage.vue";
import AggUserPage from "./AggUserPage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AggMainFrame",
  components: {
    AggUserPage,
    AggCollectionPage,
    AggHomePage,
  },

  methods: {},

  computed: {
    tabs() {
      return this.$store.state.tab;
    },
  },
});
</script>

<style scoped>
.el-main {
  padding: 0 0 0 0;
}
</style>

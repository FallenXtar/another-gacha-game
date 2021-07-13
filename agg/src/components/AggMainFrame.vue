<template>
  <agg-collection-page v-if="tabs == 1"></agg-collection-page>
  <agg-home-page v-if="tabs == 2"></agg-home-page>
  <agg-user-page v-if="tabs == 3"> </agg-user-page>
</template>

<script lang="ts">
import AggCollectionPage from "./AggCollectionPage.vue";
import AggHomePage from "./AggHomePage.vue";
import AggUserPage from "./AggUserPage.vue";

export default {
  name: "AggMainFrame",
  components: {
    AggUserPage,
    AggCollectionPage,
    AggHomePage,
  },
  data(): unknown {
    return {
      tabs: 1,
    };
  },
  props: {},
  methods: {
    setTabs(n: number): void {
      this.data.tabs = n;
    },
  },
};
</script>

<style scoped>
.el-main {
  padding: 0 0 0 0;
}
</style>

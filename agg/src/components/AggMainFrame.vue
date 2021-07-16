<template>
  <el-main>
    <agg-collection-page
      v-if="tab == 'collection'"
      :style="activateStatus"
    ></agg-collection-page>
    <agg-home-page v-if="tab == 'home'" :style="activateStatus"></agg-home-page>
    <agg-user-page v-if="tab == 'user'" :style="activateStatus">
    </agg-user-page>
  </el-main>
</template>

<script lang="ts">
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

  props: {
    tab: String,
  },

  data() {
    return {
      activateStatus: {
        color: "red",
        fontSize: "13px",
      },
    };
  },

  methods: {},
});
</script>

<style scoped>
.el-main {
  padding: 0 0 0 0;
}
</style>

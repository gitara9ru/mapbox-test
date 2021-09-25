<template>
  <v-app>
    <v-app-bar app height="120"> はじてん! </v-app-bar>
    <v-main>
      <v-container fill-height>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
<style scoped>
.my-container {
  max-width: 1200px;
}
.outer-container {
}
</style>

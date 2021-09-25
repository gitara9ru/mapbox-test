<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <map-test />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SpotDetail from "@/components/SpotDetail.vue";
import MapTest from "@/components/MapTest.vue";
import { mapModule } from "@/store/modules/Map";

@Component({ components: { SpotDetail, MapTest } })
export default class Home extends Vue {
  created() {
    mapModule.initializeCenter();
  }
}
</script>
<style scoped></style>

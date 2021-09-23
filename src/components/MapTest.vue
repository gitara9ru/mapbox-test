<template>
  <div style="width: 800px; height: 400px" id="map-container"></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class MapTest extends Vue {
  mounted() {
    const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
    console.log(process.env);
    const token = process.env.VUE_APP_MAPBOX_TOKEN;

    mapboxgl.accessToken = token;

    // このmapをいじる
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
    });
  }
}
</script>
<style scoped>
#map-container {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>

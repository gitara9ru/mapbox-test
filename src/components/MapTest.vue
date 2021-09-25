<template>
  <div style="width: 800px; height: 400px" id="map"></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import dataset from "@/const/dataset.json";
import {  FeatureCollection } from "geojson";
import mapboxgl from "mapbox-gl";

let map!: mapboxgl.Map;
const leftBottom = new mapboxgl.LngLat(139.367779, 35.5145);
const rightTop = new mapboxgl.LngLat(139.90311, 35.77641);

const center = {
  lat: (leftBottom.lat + rightTop.lat) / 2,
  lng: (leftBottom.lng + rightTop.lng) / 2,
};

@Component({})
export default class MapTest extends Vue {
  procDataset(dataset: FeatureCollection) {
    // メソッド例。this.hogeで呼ぶ
    for (const { geometry } of dataset.features) {
      // create a HTML element for each feature
      const el = document.createElement("div");
      //TODO scoped styleのクラスが当てられないのでassets/main.cssに定義している
      el.className = "mypoint";

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(geometry.coordinates).addTo(map);
    }
  }

  resetBounds() {
    const bounds = new mapboxgl.LngLatBounds([
      leftBottom.lng,
      leftBottom.lat,
      rightTop.lng,
      rightTop.lat,
    ]);
    map.fitBounds(bounds, { padding: 20 });
  }
  mounted() {
    // templateのdomが(html要素)がmountされた後に呼ばれるフック
    const token = process.env.VUE_APP_MAPBOX_TOKEN;

    // このmapをいじる
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      accessToken: token,
      center: [center.lng, center.lat],
      zoom: 3,
    });

    this.procDataset(dataset);
    map.addControl(new mapboxgl.NavigationControl());
    this.resetBounds();
  }
}
</script>
<style scoped>
#map {
  margin: auto;
}
</style>

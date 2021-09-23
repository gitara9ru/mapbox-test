<template>
  <div style="width: 800px; height: 400px" id="map"></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import dataset from "@/const/dataset.json";
import { GeoJSON, FeatureCollection } from "geojson";
import mapboxgl from "mapbox-gl";

let map!: mapboxgl.Map;

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
  mounted() {
    // templateのdomが(html要素)がmountされた後に呼ばれるフック
    const token = process.env.VUE_APP_MAPBOX_TOKEN;

    // このmapをいじる
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      accessToken: token,
      center: [-96, 37.8],
      zoom: 3,
    });
    this.procDataset(dataset);
  }
}
</script>
<style scoped>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

.mypoint {
  /* background-image: url("/images/logo.png");
  background-size: cover; */
  background-color: black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>

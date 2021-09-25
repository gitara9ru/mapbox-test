<template>
  <v-container>
    <div style="width: 1000px; height: 500px" id="map"></div>
    <v-btn @click="openDialog">dialog</v-btn>
    <v-dialog v-model="isDialog">
      <v-card>
        <!-- 洗濯したマーカーの情報を出す -->
        <v-card-title>タイトル</v-card-title>
        <v-card-text>ダイアログ</v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-dialog>
          <div
            class="line-it-button"
            data-lang="ja"
            data-type="share-b"
            data-ver="3"
            data-url="https://social-plugins.line.me/ja/how_to_install#lineitbutton"
            data-color="default"
            data-size="small"
            data-count="true"
            style="display: none"
          ></div>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import dataset from "@/const/dataset.json";
import { FeatureCollection } from "geojson";
import mapboxgl from "mapbox-gl";
import { MyPoint } from "@/models/MyPoint";

let map!: mapboxgl.Map;
const leftBottom = new mapboxgl.LngLat(139.367779, 35.5145);
const rightTop = new mapboxgl.LngLat(139.90311, 35.77641);

const center = {
  lat: (leftBottom.lat + rightTop.lat) / 2,
  lng: (leftBottom.lng + rightTop.lng) / 2,
};

@Component({})
export default class MapTest extends Vue {
  // 洗濯中のマーカー
  focus: MyPoint | null = null;
  // ダイアログの開閉
  isDialog = false;
  get urlMe() {
    return this.$route.fullPath;
  }
  procDataset(dataset: FeatureCollection) {
    // メソッド例。this.hogeで呼ぶ
    for (const { geometry } of dataset.features) {
      // create a HTML element for each feature
      const el = document.createElement("div");
      //TODO scoped styleのクラスが当てられないのでassets/main.cssに定義している
      el.className = "mypoint";

      // make a marker for each feature and add to the map
      // @ts-ignore
      new mapboxgl.Marker(el).setLngLat(geometry.coordinates).addTo(map);
    }
  }

  openDialog() {
    this.focus = {
      lat: 0,
      lng: 8,
      name: "サンプル",
    };
    this.isDialog = true;
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
  focusLatLng(lat: number, lng: number) {
    const dataList = dataset.features.map((e) => e.geometry.coordinates);
    const detail = dataList.find((e) => {
      return e[0] === lat && e[1] === lng;
    });
    if (!detail) {
      //TODO 存在しない施設/
      return;
    }
    alert(detail?.[0]);
  }
  procQuery() {
    const isValid =
      ["lat", "lng"].filter((k) => this.$route.query[k] === undefined)
        .length === 0;
    if (!isValid) {
      return;
    }
    const lat = Number(this.$route.query.lat);
    const lng = Number(this.$route.query.lng);
    if (isNaN(lat) || isNaN(lng)) {
      return;
    }
    this.focusLatLng(lat, lng);
  }

  mounted() {
    // templateのdomが(html要素)がmountされた後に呼ばれるフック
    const token = process.env.VUE_APP_MAPBOX_TOKEN;

    // このmapをいじる
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/super-pylori6/cktzde3c217e218uhiw36gafn",
      accessToken: token,
      center: [center.lng, center.lat],
      zoom: 3,
    });

    // @ts-ignore
    this.procDataset(dataset);
    map.addControl(new mapboxgl.NavigationControl());
    this.resetBounds();
    this.procQuery();
    this.$watch(() => this.$route.query, this.procQuery, {
      deep: true,
    });
  }
}
</script>
<style scoped>
#map {
  margin: auto;
}
</style>

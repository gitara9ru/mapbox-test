<template>
  <v-container>
    <div
      class="line-it-button"
      data-lang="ja"
      data-type="share-b"
      data-ver="3"
      data-url="https://vuetifyjs.com/ja/components/ratings/#card-ratings"
      data-color="default"
      data-size="small"
      data-count="true"
      style="display: none"
    ></div>
    <my-title title="おすすめスポット" />
    <v-virtual-scroll :items="candidates" :item-height="50" height="250">
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-icon>
            <v-img src="/new.png"> </v-img>
          </v-list-item-icon>
          <v-list-item-content>
            <span style="cursor: pointer" @click="toDetail(item)">
              {{ item.name }}</span
            >
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SpotDetail from "@/components/SpotDetail.vue";
import MyTitle from "@/components/MyTitle.vue";
import { mapModule } from "@/store/modules/Map";
import { MyPoint } from "@/models/MyPoint";

@Component({ components: { SpotDetail, MyTitle } })
export default class Candidates extends Vue {
  candidates: MyPoint[] = Array.from(new Array(30)).map(
    () => mapModule.center as MyPoint
  );
  toDetail(candidate: MyPoint) {
    mapModule.setDetail(candidate);
    this.$router.push("detail");
  }
}
</script>
<style scoped>
</style>

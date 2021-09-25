import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import store from "@/store";
import { MyPoint } from "@/models/MyPoint";
//https://github.com/championswimmer/vuex-module-decorators

@Module({ dynamic: true, name: "map", store, namespaced: true })
export default class Map extends VuexModule {
  //TODO 現在位置を初期値にする
  center: MyPoint | null = null;

  detail: MyPoint | null = null;

  details: MyPoint[] = [];

  @Mutation
  setCenter(point: MyPoint) {
    this.center = point;
  }

  @Mutation
  setDetail(point: MyPoint) {
    this.detail = point;
  }

  @Mutation
  setDetails(points: MyPoint[]) {
    this.details = points;
  }

  //TODO ここで外部ライブラリから現在地セットもあり
  @Action({})
  initializeCenter() {
    const tokyoStation = {
      lat: 35.6553568,
      lng: 139.7957744,
      name: "豊洲駅",
      feature: {
        "elevation": 1,
        "darkness": 1,
      }

    };
    this.setCenter(tokyoStation);
  }
}
export const mapModule = getModule(Map);

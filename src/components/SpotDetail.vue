<template>
  <v-container>
    <my-title :title="detail.name" />
    <v-container>
    <v-row>
      総合
      <v-spacer></v-spacer>
      <v-rating
        :value="average"
        background-color="black lighten-3"
        color="black"
        readonly
      ></v-rating>
    </v-row>
    <v-row v-for="rating in Object.values(ratings)" :key="rating.text">
      {{ rating.text }}
      <v-spacer></v-spacer>
      <v-rating
        :value="rating.value"
        background-color="black lighten-3"
        color="black"
        readonly
      ></v-rating>
    </v-row>
    <v-subheader>SNSで共有</v-subheader>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ="
      crossorigin="anonymous"
    />
    <v-row>
      <div class="share-network-list">
        <ShareNetwork
          v-for="network in networks"
          :network="network.network"
          :key="network.network"
          :style="{ backgroundColor: network.color }"
          :url="sharing.url"
          :title="sharing.title"
          :description="sharing.description"
          :quote="sharing.quote"
          :hashtags="sharing.hashtags"
          :twitterUser="sharing.twitterUser"
        >
          <i :class="network.icon"></i>
        </ShareNetwork>
      </div>
    </v-row>
    </v-container>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import MyTitle from "@/components/MyTitle.vue";
import { mapModule } from "@/store/modules/Map";

@Component({ components: { MyTitle } })
export default class SpotDetail extends Vue {
  get detail() {
    return mapModule.detail;
  }

  get ratings() {
    return {
      elavation: {
        text: "標高",
        value: 1,
      },
      darkness: {
        text: "空の綺麗さ",
        value: 4,
      },
    };
  }

  get average() {
    const sum = Object.values(this.ratings).reduce((acc, cur) => {
      return acc + cur.value;
    }, 0);
    return sum / Object.keys(this.ratings).length;
  }
  get sharing() {
    return {
      url: "https://news.vuejs.org/issues/180",
      title:
        "Say hi to Vite! A brand new, extremely fast development setup for Vue.",
      description:
        'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
      quote: "The hot reload is so fast it's near instant. - Evan You",
      hashtags: "vuejs,vite,javascript",
      twitterUser: "youyuxi",
    };
  }
  get networks() {
    return [
      {
        network: "facebook",
        name: "Facebook",
        icon: "fab fah fa-lg fa-facebook-f",
        color: "#1877f2",
      },
      {
        network: "line",
        name: "Line",
        icon: "fab fah fa-lg fa-line",
        color: "#00c300",
      },
      {
        network: "twitter",
        name: "Twitter",
        icon: "fab fah fa-lg fa-twitter",
        color: "#1da1f2",
      },
    ];
  }
}
</script>
<style scoped>
.share-network-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
}
a[class^="share-network-"] {
  flex: none;
  color: #ffffff;
  background-color: #333;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10px 10px 0;
}
a[class^="share-network-"] .fah {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  flex: 0 1 auto;
}
a[class^="share-network-"] span {
  padding: 0 10px;
  flex: 1 1 0%;
  font-weight: 500;
}
</style>

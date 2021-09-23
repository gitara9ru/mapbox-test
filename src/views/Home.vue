<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <MapTest/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import MapTest from "@/components/MapTest.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    MapTest
  },
})
export default class Home extends Vue {}
</script>

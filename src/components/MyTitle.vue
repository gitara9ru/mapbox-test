<template>
  <div class="pa-5 ma-5 my-title">
    {{ title }}
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Candidates extends Vue {
  @Prop()
  title!: string;
}
</script>
<style scoped>
.my-title {
  font-size: 20px;
  font-weight: bold;
}
</style>
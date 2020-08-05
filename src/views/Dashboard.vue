<template>
  <layout-default>
    <div class="dashboard pa-4">
      <h1 class="text-h3">Welcome back, Aloys.</h1>
      <div class="container" fluid>
        <h3 class="text-h4">Wings</h3>
        <v-row class="grid">
          <v-skeleton-loader
            class="flex-grow-1 flex-shrink-1 ma-4"
            elevation="12"
            ref="skeleton"
            type="card, list-item-three-line, list-item-line, list-item-two-line@2, actions"
          ></v-skeleton-loader>
          <WingAdCard certified="0" condition="1" />
          <WingAdCard certified="0" condition="1" />
          <WingAdCard certified="0" condition="1" />
        </v-row>
        <h3 class="text-h4">Harness</h3>
        <v-row class="grid">
          <WingAdCard certified="0" condition="1" />
          <WingAdCard certified="0" condition="1" />
          <WingAdCard certified="0" condition="1" />
        </v-row>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "@/layout/LayoutDefault";
import WingAdCard from "@/components/WingAdCard";

export default {
  components: { LayoutDefault, WingAdCard }
};
</script>

<style scope lang="scss">
.dashboard {
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>

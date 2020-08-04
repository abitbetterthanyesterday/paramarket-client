<template>
  <layout>
  <div class = "dashboard">
    <h1>Favorites</h1>
    <v-container class="grid" fluid>
    <WingAdCard certified="false" condition="1"/>
    <WingAdCard certified="false" condition="2"/>
    <WingAdCard certified="true" condition="5"/>
    <WingAdCard certified="true" condition="3"/>
    <WingAdCard certified="false" condition="5"/>
  </v-container>
  </div>
  </layout>
</template>

<script>
import WingAdCard from "@/components/WingAdCard";

export default {
  components: { WingAdCard }
};
</script>

<style scope lang="scss">
  .dashboard{
    background: #ECE9E6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  .grid{
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  }
</style>

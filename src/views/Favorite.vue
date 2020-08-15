<template>
  <layout-default>
    <div class="dashboard pa-4">
      <h1 class="text-h3">Favorites</h1>
      <h2 class="text-subtitle-1">Find all your favorite ads save here.</h2>
      <v-container class="grid" fluid>
        <v-skeleton-loader
          v-for="wing in dummyData"
          :key="wing.id"
          :id="wing.id"
          :brand="wing.brand"
          :model="wing.model"
          :year="wing.year"
          :hours="wing.hours"
          :price="wing.price"
          :weigthRangeMin="wing.weightRangeMin"
          :weigthRangeMax="wing.weightRangeMax"
          :category="wing.category"
          :country="wing.country"
          :town="wing.town"
          :certified="wing.certified"
          :condition="wing.condition"
        />
      </v-container>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "@/layout/LayoutDefault";
import WingAdCard from "@/components/WingAdCard";

export default {
  components: { LayoutDefault, WingAdCard },
  data() {
    return {
      dummyData: [
        {
          id: 4,
          brand: "Gin",
          model: "Sprint 3",
          year: "2017",
          hours: "50",
          price: "1500",
          weightRangeMin: 75,
          weightRangeMax: 95,
          category: "EN-B",
          country: "England",
          town: "London",
          certified: "1",
          condition: "1"
        },
        {
          id: 2,
          brand: "Ozone",
          model: "Enzo 3",
          year: "2019",
          hours: "450",
          price: "800",
          weightRangeMin: "75",
          weightRangeMax: "95",
          category: "EN-CCC",
          country: "France",
          town: "Doussard",
          certified: "0",
          condition: "1"
        },
        {
          id: 3,
          brand: "Gin",
          model: "Sprint 3",
          year: "2017",
          hours: "50",
          price: "1500",
          weightRangeMin: "75",
          weightRangeMax: "95",
          category: "EN-B",
          country: "England",
          town: "London",
          certified: "0",
          condition: "1"
        }
      ]
    };
  }
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

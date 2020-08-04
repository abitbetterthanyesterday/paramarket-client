<template>
  <div>
    <v-card class="flex-grow-1 flex-shrink-1 ma-4" elevation="12">
        <v-carousel height= "250px"           hide-delimiter-background
    show-arrows-on-hover>
    <v-carousel-item
      v-for="(image,i) in images"
      :key="i"
      :src="image.src"


    ></v-carousel-item>
  </v-carousel>
      <v-card-title class="py-3">Ozone, Mojo - 25</v-card-title>
      <v-card-text class="text--primary">
        <div class="pb-1"><v-icon class='mr-2'>mdi-scale</v-icon>70 - 90 kg</div>
        <div class="pb-1"><v-icon class='mr-2'>mdi-calendar</v-icon>2019</div>
        <div class="pb-1"><v-icon class='mr-2'>mdi-clock-outline</v-icon>200 hours</div>
        <div class="pb-1"><v-icon class='mr-2'>mdi-currency-usd</v-icon>2000 euros</div>
        <div class="pb-1"><v-icon class='mr-2'>mdi-shape</v-icon>EN-C</div>
        <div class="pb-1"><v-icon class='mr-2'>mdi-map-marker</v-icon>France, Doussard</div>
        <div class="pb-1">
         <v-icon class="mr-2">{{ certified? 'mdi-check':'mdi-alert'}}</v-icon>{{ certified? 'Certified':'Not Certified'}}
        </div>
<!--         <div class='ml-2 pb-2'>Condition:</div>
        <div class="d-flex justify-space-around">
          <v-icon :style = "[ (condition == 1)?{border: '3px solid forestgreen', color: 'forestgreen', borderRadius: '50%', padding: '2px'}:{} ]">mdi-emoticon-cool-outline</v-icon
          ><v-icon :style = "[ (condition == 2)?{border: '3px solid green', color: 'green', borderRadius: '50%', padding: '2px'}:{} ]">mdi-emoticon-excited-outline</v-icon
          ><v-icon :style = "[ (condition == 3)?{border: '3px solid gold', color: 'gold', borderRadius: '50%', padding: '2px'}:{} ]">mdi-emoticon-happy-outline</v-icon
          ><v-icon :style = "[ (condition == 4)?{border: '3px solid orange', color: 'orange', borderRadius: '50%', padding: '2px'}:{} ]">mdi-emoticon-neutral-outline</v-icon
          ><v-icon :style = "[ (condition == 5)?{border: '3px solid red', color: 'red', borderRadius: '50%', padding: '2px'}:{} ]">mdi-emoticon-dead-outline</v-icon>
        </div> -->
      </v-card-text>
      <v-card-actions class="pa-5 pt-0 d-flex justify-space-between">
        <v-btn color="primary">
          Contact seller
        </v-btn>
        <v-btn icon class="d-flex" @click="isFavorite = !isFavorite">
          <v-icon class="font-weight-bold red--text">{{
            this.isFavorite ? "mdi-heart" : "mdi-heart-outline"
          }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props:['condition', 'isCertified'],
  data() {
    return {
      isFavorite: false,
          images: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    };
  },
  method: {}
};
</script>

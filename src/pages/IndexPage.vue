<template>
  <q-page class="q-gutter-y-md">
    <div class="row">
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="grey"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        height="400px"
        autoplay
        infinite
        class="full-width"
      >
        <q-carousel-slide
          v-for="n in items"
          :key="n"
          :name="n"
          class="column no-wrap flex-center"
        >
          <img :src="`https://placehold.co/1200x400?text=Imagen_${n}`" />
        </q-carousel-slide>
      </q-carousel>
      <div class="gradient"></div>
    </div>
    <div class="row">
      <div v-for="i in items" :key="i" class="col">
        <q-card class="my-card">
          <div class="text-h6">Our Changing Planet</div>
          <img
            class="q-px-md"
            :src="`https://placehold.co/600x400?text=Imagen_${i}`"
          />
          <q-card-section>
            <div class="text-subtitle2">by John Doe {{ i }}</div>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <q-card class="q-pa-md full-width" square style="height: 400px">
        <div class="text-h6">Ofertas</div>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </q-card-section>
      </q-card>
    </div>
    <div class="row">
      <q-card class="q-pa-md" square style="height: 400px">
        <div class="text-h6">Ofertas</div>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'IndexPage',
});
const slide = ref(1);
const items = ref(6);
</script>

<style lang="sass">
.my-card
  width: 200px


.carousel
  position: absolute
  top: 0

  .gradient
    width: 100%
    height: 30%
    background: linear-gradient(180deg,transparent,#ebebeb)
    position: absolute
    left: 0
    bottom: 0
    z-index: 3
</style>

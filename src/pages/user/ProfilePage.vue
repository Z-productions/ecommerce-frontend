<template>
  <q-page padding>
    <q-layout view="hHh Lpr lff">
      <q-drawer
        side="left"
        v-model="leftDrawerOpen"
        bordered
        :width="250"
        :breakpoint="500"
      >
        <q-scroll-area
          style="
            height: calc(100% - 260px);
            margin-top: 260px;
            border-right: 1px solid #ddd;
          "
        >
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="shopping_bag" />
              </q-item-section>

              <q-item-section> Compras </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section> Drafts </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img
          class="absolute-top"
          style="background-color: black; height: 150px; margin-top: 110px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>
      <q-page-container>
        <q-page padding>
          <div class="row justify-center items-center full-width">
            <q-item v-ripple>
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Mary</q-item-label>
                <q-item-label caption>2 new messages</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="row">
            <div class="col"></div>
          </div>
          <div class="row">
            <div class="col"></div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'ProfilePage',
});
const leftDrawerOpen = ref(true);
</script>

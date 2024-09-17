<template>
  <q-layout view="lHh Lpr fff" class="bg-grey-1">
    <q-header class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-toolbar-title
          v-if="$q.screen.gt.sm"
          shrink
          class="row items-center no-wrap"
        >
          <img
            src="https://placehold.co/74x24/EEE/31343C?font=playfair-display&text=Logo"
          />
          <router-link to="/">
            <span class="q-ml-sm"> E-Commerce </span></router-link
          >
        </q-toolbar-title>

        <q-space />

        <q-input
          class="GPL__toolbar-input"
          dense
          standout="bg-grey-5"
          v-model="search"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon v-if="search === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="search = ''"
            />
          </template>
        </q-input>

        <q-space />

        <q-btn round flat>
          <q-avatar size="26px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <q-tooltip>Account</q-tooltip>
          <q-menu anchor="top end" self="bottom end">
            <q-list class="text-grey-8" style="min-width: 100px">
              <q-item aria-hidden="true">
                <q-item-section
                  class="text-uppercase text-grey-7"
                  style="font-size: 0.7rem"
                  >Menu</q-item-section
                >
              </q-item>
              <q-item
                v-for="menu in links3"
                :key="menu.text"
                clickable
                v-close-popup
                aria-hidden="true"
                :to="menu?.redirect ? menu.path : { name: 'Login' }"
              >
                <q-item-section avatar>
                  <q-icon :name="menu.icon" />
                </q-item-section>
                <q-item-section>{{ menu.text }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
      <q-toolbar inset class="GPL__toolbar">
        <q-toolbar-title><strong>Quasar</strong> Framework</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-white text-grey-8" height-hint="400">
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container class="GPL__page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useUserStore } from 'src/stores/user-store';
import { ref } from 'vue';
const userStore = useUserStore();
defineOptions({
  name: 'MainLayout',
});

const search = ref('');
const links3 = [
  {
    icon: 'settings',
    text: 'Settings',
    path: { name: 'ProfilePage' },
    redirect: userStore.isLogged,
  },
  { icon: 'help', text: 'Help & Feedback', path: '' },
  { icon: 'get_app', text: 'App Downloads', path: '' },
];
</script>

<style lang="sass">
.GPL

  &__toolbar
    height: 64px
    padding-left: 150px
    padding-right: 150px

  &__toolbar-input
    width: 30%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368

    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px

  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500

  @media (min-width: 1024px)
    &__page-container
      padding-left: 150px
      padding-right: 150px
</style>

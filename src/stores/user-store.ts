import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    isLogged: false,
  }),

  getters: {},

  actions: {
    Login() {
      this.isLogged = true;
    },
  },
});

<template>
  <q-page padding>
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width: 400px">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Registration</h4>
            <div
              class="absolute-bottom-right q-pr-md"
              style="z-index: 4; transform: translateY(50%)"
            >
              <q-btn
                :to="{ name: 'Login' }"
                fab
                icon="close"
                color="purple-4"
              />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input
                square
                clearable
                v-model="formRegister.email"
                type="email"
                label="Email"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model="formRegister.login"
                type="text"
                label="Username"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model="formRegister.first_name"
                type="text"
                label="First name"
              >
                <template v-slot:prepend>
                  <q-icon name="badge" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model="formRegister.last_name"
                type="text"
                label="Last name"
              >
                <template v-slot:prepend>
                  <q-icon name="badge" />
                </template>
              </q-input>
              <br />
              <span class="text-grey-6"> Security</span>
              <br />
              <q-input
                square
                clearable
                v-model="formRegister.password"
                type="password"
                label="Password"
                :rules="[(val: String) => val && val.length > 0 && val.length >= 8 || 'The password must be at least 8 characters']"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model="confirmPassword"
                type="password"
                label="Confirm password"
                :rules="[(val: String) => val && val.localeCompare(formRegister.password) == 0 || 'Passwords do not match']"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              unelevated
              size="lg"
              color="purple-4"
              class="full-width text-white"
              label="Get Started"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <span class="text-grey-6">
              Return to
              <router-link :to="{ name: 'Login' }">login </router-link>
            </span>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'RegisterPage',
});
const confirmPassword = ref('');
const formRegister = ref({
  email: '',
  login: '',
  password: '',
  first_name: '',
  last_name: '',
});
</script>

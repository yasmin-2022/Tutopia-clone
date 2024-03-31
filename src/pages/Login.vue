<template>
  <div>
    <div class="q-mt-md text-center">
      <img src="../assets/logo.png" alt="logo" class="img" />
    </div>
    <div v-if="user">
      <button @click="signout">Sign Out</button>
    </div>
    <form action="" @submit.prevent="submit">
      <div class="q-ml-xl q-px-lg">
        <p class="text-h5 text-weight-bold q-mt-xl text">
          {{ mode === "login" ? "Login" : "Register" }}
        </p>
        <q-input
          type="text"
          v-model="name"
          outlined
          class="input q-mx-auto q-mb-lg"
          placeholder="Enter Name"
        />

        <q-input
          type="text"
          v-model="Email"
          outlined
          class="input q-mx-auto q-mb-lg"
          placeholder="Enter Email"
        />

        <q-select
          v-if="mode !== 'login'"
          outlined
          v-model="state"
          :options="option2"
          class="q-my-lg"
          label="board"
        />
        <q-select
          v-if="mode !== 'login'"
          outlined
          v-model="select"
          :options="options"
          class="q-my-lg"
          label="class"
        />
        <q-input
          v-if="mode === 'login'"
          outlined
          class="input q-mx-auto q-mb-lg"
          placeholder="Enter Password"
          id="password"
          :type="isPwd ? 'password' : 'text'"
          v-model="Password"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            /> </template
        ></q-input>
        <q-btn
          type="submit"
          class="btn q-py-md q-mb-md"
          color="primary"
          @click="submit()"
          >{{ mode === "login" ? "Login" : "Register" }}</q-btn
        >
        <div v-if="mode == 'login'">
          <router-link to="/forgot">
            <a href="#" class="text-primary text-subtitle1">Forgot Password</a>
          </router-link>
        </div>
      </div>
    </form>
    <div class="text-center">
      <div class="text-subtitle1 text-grey4">OR</div>
      <q-btn
        v-if="mode == 'login'"
        outline
        color="primary"
        class="btn q-py-md q-ml-lg q-mt-sm"
        >Login With OTP</q-btn
      >
    </div>
    <div class="q-mt-lg text-center text-body1">
      <div @click="toggleMode(mode === 'login' ? 'Register' : 'login')">
        {{ mode === "login" ? "New to tutopia" : "Already have an account" }}
        <span class="text-primary text-weight-medium">{{
          mode === "login" ? " Register" : "Login"
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { ref } from "vue";
import { useCounterStore } from "../stores/count";
import { RouterLink, useRouter } from "vue-router";
import { useLoginStore } from "../stores/login";
import { storeToRefs } from "pinia";
export default {
  name: "LoginPage",
  setup() {
    const loginStore = useLoginStore();
    const { name } = storeToRefs(loginStore);
    const router = useRouter();
    const counter = useCounterStore();
    const isPwd = ref(true);
    const Email = ref("");
    const Name = ref("");
    const Password = ref("");
    const mode = ref("");
    const expand = ref(false);
    const expandbtn = ref(false);
    const user = ref(null);
    const select = ref(null);
    const state = ref(null);
    const toggleMode = (val) => {
      mode.value = val;
    };
    const options = ref([
      "FirstClass",
      "MeddleClass",
      "LowerClass",
      "OBC",
      "ST/SC",
    ]);
    const option2 = ref(["WestBengal"]);
    const submit = () => {
      let email = Email.value;
      let password = Password.value;
      if (mode.value === "login") {
        login(email, password);
      } else {
        register(email, password);
      }
    };
    async function login(email, password) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
      router.push("/");
    }
    async function register(email, password) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
    });
    async function signout() {
      try {
        const res = await signOut(auth);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }

    return {
      router,
      expand,
      counter,
      expandbtn,
      isPwd,
      Password,
      submit,
      Email,
      mode,
      Name,
      toggleMode,
      register,
      login,
      user,
      signout,
      options,
      option2,
      select,
      state,
      loginStore,
      name,
    };
  },
};
</script>

<style lang="scss" scoped></style>

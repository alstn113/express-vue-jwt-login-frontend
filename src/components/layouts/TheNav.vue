<template>
  <nav class="py-3 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="navbar-brand" :to="{ name: 'About' }">About</router-link>
      </ul>
      <ul class="nav">
        <li v-if="isAutherized" class="btn btn-outline-primary mx-3" @click="logout">Logout</li>
        <li v-else><router-link class="btn btn-outline-primary mx-3" :to="{ name: 'Login' }">Login</router-link></li>
        <router-link class="btn btn-outline-primary" :to="{ name: 'Register' }">Register</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
export default {
  name: "theNav",
  setup() {
    const store = useStore();
    const router = useRouter();
    const isAutherized = computed(() => store.state.auth.authState);
    const logout = () => {
      Swal.fire({
        title: "로그아웃을 하시겠습니까?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "blue",
        cancelButtonColor: "red",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "로그아웃되었습니다",
            icon: "success",
            timer: 800,
          }).then(() => {
            store.dispatch("resetState");
            router.push({ name: "Login" });
          });
        }
      });
    };
    return {
      isAutherized,
      logout,
    };
  },
};
</script>

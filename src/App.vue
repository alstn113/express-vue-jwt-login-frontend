<template>
  <div>
    <TheNav />
    <router-view style="height: 650px;" />
    <TheFooter />
  </div>
</template>

<script>
import TheNav from "@/components/layouts/TheNav";
import TheFooter from "@/components/layouts/TheFooter";
export default {
  components: { TheNav, TheFooter },
};
</script>

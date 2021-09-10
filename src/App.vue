<template>
  <component :is="resolveLayout">
    <router-view />
  </component>
</template>

<script>
import BasicLayout from "@/layouts/BasicLayout";
import UserMainLayout from "@/layouts/UserMainLayout";

export default {
  name: "App",

  components: {
    BasicLayout,
    UserMainLayout,
  },

  computed: {
    resolveLayout() {
      if (this.isLoggedIn) {
        return UserMainLayout;
      }
      return BasicLayout;
    },
  },
  data: () => ({
    isLoggedIn: true,
  }),
};
</script>

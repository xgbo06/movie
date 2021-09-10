<template>
  <component :is="resolveLayout">
    <router-view />
  </component>
</template>

<script>
import BasicLayout from "@/layouts/BasicLayout";
import UserMainLayout from "@/layouts/UserMainLayout";

const loggedInRoutes = ["Home", "Details"];

export default {
  name: "App",

  components: {
    BasicLayout,
    UserMainLayout,
  },

  computed: {
    resolveLayout() {
      let routeName = this.$route.name;
      if (loggedInRoutes.indexOf(routeName) > -1) {
        return UserMainLayout;
      }
      return BasicLayout;
    },
  },
  data: () => ({}),
};
</script>

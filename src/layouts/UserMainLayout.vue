<template>
  <v-app>
    <v-app-bar app color="#1867c0" dark elevate>
      <v-toolbar-title>Movie Mania</v-toolbar-title>
      <v-spacer />

      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item v-for="(menu, i) in menus" :key="i" @click="menu.action">
            <v-list-item-content>
              <v-list-item-title>
                {{ menu.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <div class="app-content-container pa-4">
        <slot></slot>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          title: "Profile",
          icon: "mdi-cog",
          action: () => {
            console.log("Profile");
          },
        },
        {
          title: "Logout",
          icon: "mdi-power",
          action: () => {
            console.log("Logout");
            this.logout();
          },
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$router.push({
        name: "Login",
      });
    },
  },
  created() {
    let isLoggedIn = localStorage.getItem("isLoggin");
    if (!isLoggedIn) {
      this.logout();
    }
  },
};
</script>

<style></style>

<template>
  <div class="login d-flex align-center fill-height">
    <v-col cols="12" sm="8" md="6" class="mx-auto">
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login Form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="loginForm">
            <v-text-field
              prepend-icon="mdi-account"
              name="userName"
              label="User Name"
              type="text"
              :rules="[(v) => !!v || 'Please enter your username/email']"
            ></v-text-field>
            <v-text-field
              id="password"
              prepend-icon="mdi-lock"
              name="password"
              label="Password"
              type="password"
              :rules="[(v) => !!v || 'Please enter your password']"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      let isValid = this.$refs.loginForm.validate();
      if (isValid) {
        localStorage.setItem("isLoggin", true);
        this.$router.push({
          name: "Home",
        });
      }
    },
  },
};
</script>

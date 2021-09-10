<template>
  <v-app>
    <v-main class="main">
      <div class="app-content-container pa-4 fill-height">
        <slot></slot>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  background: gainsboro;
}
</style>

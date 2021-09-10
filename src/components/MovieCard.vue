<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-img height="250" :src="details.Poster"></v-img>

    <v-card-title>{{ details.Title }}</v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>{{ details.Year }}</v-chip>

        <v-chip>{{ details.Type }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn text @click="reserve" class="mx-auto">
        Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  name: "MovieCard",
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style></style>

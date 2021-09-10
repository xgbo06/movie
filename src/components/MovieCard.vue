<template>
  <v-col cols="12" sm="4" md="3" lg="2">
    <v-card class="mx-auto my-4" max-width="374">
      <v-img height="250" :src="details.Poster"></v-img>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            <v-card-title class="d-block text-truncate">
              {{ details.Title }}
            </v-card-title>
          </span>
        </template>
        <span> {{ details.Title }} </span>
      </v-tooltip>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <v-chip-group column>
          <v-chip>{{ details.Year }}</v-chip>

          <v-chip>{{ details.Type }}</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn text @click="viewDetails" class="mx-auto" color="primary">
          View Details
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
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
  data: () => ({}),

  methods: {
    viewDetails() {
      console.log(this.details);
      this.$router.push({
        name: "Details",
        params: { id: this.details.imdbID },
      });
    },
  },
};
</script>

<style></style>

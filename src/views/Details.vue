<template>
  <v-container>
    <v-btn icon large class="my-4" @click="reDirectToHome">
      <v-icon>mdi-keyboard-backspace</v-icon>
    </v-btn>
    <v-skeleton-loader
      v-if="loading"
      class="mx-auto"
      max-width="300"
      type="card"
    ></v-skeleton-loader>
    <v-row v-else>
      <v-col cols="12" md="6">
        <v-img :src="details.Poster" max-height="450px"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-h4 text-bold mb-4" v-text="details.Title"></div>
        <div class="my-4">
          {{ details.Plot }}
        </div>
        <div>
          <div class="font-weight-bold">
            Actors:
          </div>
          <div>
            {{ details.Actors }}
          </div>
          <div class="mt-10">
            <div class="text-h6 text-bold mb-2">Ratings</div>
            <template v-for="(r, i) in raitings">
              <div :key="i">
                <div class="subtitle-2">{{ r.Source }}</div>
                <v-rating
                  :value="r.star"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  readonly
                ></v-rating>
              </div>
            </template>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { GetMovieDetails } from "@/http/movieApi.js";

export default {
  name: "Details",
  data: () => ({
    id: null,
    details: {},
    loading: true,
  }),
  computed: {
    raitings() {
      if (this.details && this.details.Ratings) {
        return this.details.Ratings.map((r) => {
          if (r.Value) {
            let [score, total] = r.Value.split("/");
            r.star = (score / total) * 5;
          }
          return r;
        });
      }
      return [];
    },
  },
  methods: {
    getDetails() {
      this.loading = true;
      GetMovieDetails(this.id).then((r) => {
        this.loading = false;
        this.details = r.data;
      });
    },
    reDirectToHome() {
      this.$router.push({
        name: "Home",
      });
    },
  },
  created() {
    if (!this.$route.params.id) {
      this.reDirectToHome();
    }
    this.id = this.$route.params.id;
    this.getDetails();
  },
};
</script>

<style></style>

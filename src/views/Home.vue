<template>
  <v-container class="home">
    <v-text-field
      hide-details
      outlined
      placeholder="Search a movie"
      append-icon="mdi-magnify"
      single-line
      dense
      v-model="searchQuery"
      @keydown.enter.native="searchMovie"
      @click:append="searchMovie"
    ></v-text-field>
    <v-row>
      <template v-if="loading">
        <v-row class="mt-8">
          <v-skeleton-loader
            class="mx-auto"
            min-width="300px"
            type="card-avatar, article"
          ></v-skeleton-loader>
          <v-skeleton-loader
            class="mx-auto"
            min-width="300px"
            type="card-avatar, article"
          ></v-skeleton-loader>
        </v-row>
      </template>
      <template v-for="(movie, index) in movies">
        <MovieCard :key="index" :details="movie" />
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { SearchMovie } from "@/http/movieApi.js";
import MovieCard from "@/components/MovieCard";
export default {
  name: "Home",
  components: {
    MovieCard,
  },
  data: () => ({
    loading: false,
    searchQuery: "",
    movies: [],
  }),
  methods: {
    searchMovie() {
      if (!this.searchQuery) {
        return;
      }
      this.loading = true;
      SearchMovie(this.searchQuery)
        .then((r) => {
          this.movies = r.data.Search;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  created() {
    this.loading = true;
    SearchMovie("pirates")
      .then((r) => {
        this.movies = r.data.Search;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

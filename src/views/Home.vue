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
    ></v-text-field>
    <v-row>
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
    searchQuery: "",
    movies: [],
  }),
  methods: {
    searchMovie() {
      console.log(this.searchQuery);
      SearchMovie(this.searchQuery).then((r) => {
        this.movies = r.data.Search;
      });
    },
  },
  created() {
    SearchMovie("pirates").then((r) => {
      this.movies = r.data.Search;
    });
  },
};
</script>

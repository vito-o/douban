<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Scroller from '@/components/Scroller';

export default {
  name: 'movie-view',
  components: {
    Scroller
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      hotMovies: state => state.movie.hotMovies,
      topMovies: state => state.movie.topMovies,
      newMovies: state => state.movie.newMovies,
      movieTags: state => state.movie.movieTags,
    })
  },
  methods: {
    getMovie() {
      this.$store.dispatch('getMovie')
    },
  },
  created() {
    this.getMovie();
  }
};

</script>

<style lang="scss" scoped>

</style>


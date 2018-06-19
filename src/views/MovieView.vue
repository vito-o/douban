<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
  </div>
</template>

<script>
import Scroller from '@/components/Scroller';

export default {
  name: 'movie-view',
  components: {
    Scroller
  }
};

</script>

<style lang="scss" scoped>

</style>


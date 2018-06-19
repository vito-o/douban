<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <list mold="thumbnail" :items="events"></list>
    <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import InfiniteLoading from 'vue-infinite-loading'
import SubNav from '@/components/SubNav'
import List from '@/components/List'
import Loading from '@/components/Loading'

export default {
  components: {
    SubNav, 
    List,
    InfiniteLoading,
    Loading
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      events: state => state.activities.events
    })
  },
  methods: {
    onInfinite () {
      setTimeout(()=>{
        this.loadMore();
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    ...mapActions([
      'loadMore'
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

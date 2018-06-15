<template>
  <div class="pages-view">
    <HeaderBar @showTalion="open"></HeaderBar>
    <router-view></router-view>
    <talion-view v-show="talion" @showTalion="close"></talion-view>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar';
import TalionView from '@/views/TalionView';

export default {
  components: {
    HeaderBar,
    TalionView,
  },
  data() {
    return {
      talion: '',
    };
  },
  methods: {
    open() {
      this.talion = 'open';
    },
    close() {
      this.talion = '';
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

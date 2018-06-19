<template>
  <div class="scroller">
    <div class="header">
      <h2></h2>
      <a href="#">更多</a>
    </div>
    <div class="content">
      <slot name="promItem"></slot>
      <ul class="hasCover" v-if="type === 'hasCover'">
        <li v-for="item in items" :key="item.id">
          <router-link :to="{}">
            <img v-if="item.images" :src="item.images.large" alt="">
            <span class="title">{{item.title}}</span>
            <rating v-if="item.rating" :rating="item.rating"></rating>
          </router-link>
        </li>
      </ul>
      <ul class="onlyString" v-if="type === 'onlyString'">
        <li v-for="item in items" style="border-color:#FFAC2D" :key="item.id">
          <a :href="item.href" v-if="!item.line" :style="{color:item.color}">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Rating from '@/components/Rating';

export default {
  name: 'scroller',
  props: ['title', 'type', 'items'],
  components: {
    Rating
  }
}
</script>

<style lang="scss" scoped>

</style>

import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import activities from './modules/activities';
import movie from './modules/movie';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    activities,
    movie,
  },
});

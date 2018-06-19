import request from 'superagent';
import jsonp from 'superagent-jsonp';

const state = {
  events: [],
  skip: 0,
};

const mutations = {
  loadMore(state, payload) {
    state.skip += 3;
    state.events = state.events.concat(payload.res);
  },
};

const actions = {
  loadMore({ commit, state }) {
    request
      .get('https://api.douban.com/v2/event/list?loc=108288&start=' + state.skip + '&count=3')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'loadMore',
            res: res.body.events,
          });
        }
      });
  },
};

export default {
  state,
  mutations,
  actions,
};

import { getAllPosts, getFilterPosts } from '@/api/Posts';
import { transformFilter } from '@/utils';
import { SET_POSTS } from '../mutation-types';

const state = {
  posts: []
};

const getters = {
  posts: state => state.posts
};

const actions = {
  fetchPosts({ commit }) {
    return getAllPosts()
      .then(posts => {
        commit({
          type: SET_POSTS,
          posts
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  filterPosts({ commit }, query) {
    return getFilterPosts(transformFilter(query))
      .then(posts => {
        commit({
          type: SET_POSTS,
          posts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};

const mutations = {
  [SET_POSTS]: (state, payload) => {
    state.posts = payload.posts;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

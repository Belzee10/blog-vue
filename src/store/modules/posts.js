import { getPosts } from '@/api/Posts';

const state = {
  posts: []
};

const getters = {
  posts: state => state.posts
};

const actions = {
  fetchPosts({ commit }) {
    return getPosts()
      .then(posts => {
        commit({
          type: 'setPosts',
          posts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};

const mutations = {
  setPosts: (state, payload) => {
    state.posts = payload.posts;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

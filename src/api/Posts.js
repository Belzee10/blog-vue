import api from '@/config/axios';

const getAllPosts = () =>
  api
    .get('/posts')
    .then(response => response.data)
    .catch(error => error);

const getFilterPosts = ({ sortBy, searchText }) => {
  const { by, order } = sortBy;
  return api
    .get(`/posts?_sort=${by}&_order=${order}&q=${searchText}`)
    .then(response => response.data)
    .catch(error => error);
};

export { getAllPosts, getFilterPosts };

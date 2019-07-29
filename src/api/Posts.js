import api from '@/config/axios';

const getAllPosts = ({ paginate: { page, limit } }) => {
  const paginate = `_page=${page}&_limit=${limit}`;

  return api
    .get(`/posts?${paginate}`)
    .then(response => response.data)
    .catch(error => error);
};

const getFilterPosts = ({ sortBy: { by, order }, searchText, paginate: { page, limit } }) => {
  const sort = `_sort=${by}&_order=${order}`;
  const search = `q=${searchText}`;
  const paginate = `_page=${page}&_limit=${limit}`;

  return api
    .get(`/posts?${sort}&${search}&${paginate}`)
    .then(response => response.data)
    .catch(error => error);
};

export { getAllPosts, getFilterPosts };

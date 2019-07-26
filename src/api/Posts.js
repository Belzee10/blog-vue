import api from '@/config/axios';

const getPosts = () =>
  api
    .get('/posts')
    .then(response => response.data)
    .catch(error => error);

export { getPosts };

const faker = require('faker');
const dayjs = require('dayjs');

module.exports = () => {
  const data = { posts: [] };

  for (let i = 0; i < 10; i += 1) {
    const post = {
      id: faker.random.uuid(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      date: dayjs(faker.date.past()).format('MMMM DD, YYYY')
    };
    data.posts.push(post);
  }

  return data;
};

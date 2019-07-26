const faker = require('faker');

module.exports = () => {
  const data = { posts: [] };

  for (let i = 0; i < 10; i += 1) {
    const post = {
      id: faker.random.uuid(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph()
    };
    data.posts.push(post);
  }

  return data;
};

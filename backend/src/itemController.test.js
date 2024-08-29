const request = require('supertest');
const app = require('./App');
const mongoose = require('mongoose');
const Item = require('./models/ItemModel');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Item API', () => {
  it('should create a new item', async () => {
    const res = await request(app)
      .post('/items')
      .send({ name: 'Test Item', description: 'Test Description' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Test Item');
  });

  // Add more tests for other CRUD operations
});

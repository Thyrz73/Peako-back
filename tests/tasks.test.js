const request = require('supertest');
const { app, server } = require('../server');

describe('Tasks API', () => {
    afterAll(() => {
        server.close(); // Fermez le serveur après les tests
    });

    it('should GET all tasks', async () => {
        const response = await request(app).get('/tasks');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

  /*it('should POST a new task', async () => {
    const task = { id: '1', name: 'Task 1' };
    const response = await request(app).post('/tasks').send(task);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id', '1');
    expect(response.body).toHaveProperty('name', 'Task 1');
  });

  it('should GET a task by ID', async () => {
    const response = await request(app).get('/tasks/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', '1');
  });

  it('should PUT (update) a task', async () => {
    const task = { name: 'Updated Task' };
    const response = await request(app).put('/tasks/1').send(task);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('name', 'Updated Task');
  });

  it('should DELETE a task', async () => {
    const response = await request(app).delete('/tasks/1');
    expect(response.statusCode).toBe(204);
  });*/
});


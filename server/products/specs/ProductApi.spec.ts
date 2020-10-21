import request from 'supertest';
import app from '../../server';
import querystring from 'querystring';
import errorMessages from '../../errors/messages';

describe('getList', () => {
  let res: request.Response;

  beforeEach(async () => {
    res = await request(app).get('/api/products');
  });

  test('returns 200 response', () => {
    expect(res.status).toBe(200);
  });

  test('response items is array', () => {
    expect(res.body.items).toBeArray();
  });

  test('response total to be positive number', () => {
    expect(res.body.total).toBeNumber();
    expect(res.body.total).not.toBeNegative();
  });
});

describe('getList validation', () => {
  describe('limit', () => {
    test('should not throw error with limit parameter undefined', async () => {
      const res = await request(app).get('/api/products');

      expect(res.status).toBe(200);
      expect(res.body.total).toBeNumber();
      expect(res.body.total).not.toBeNegative();
      expect(res.body.items).toBeArray();
      expect(res.body.items.length).toBeWithin(0, 11);
    });

    test('should have 10 or less items', async () => {
      const query = {
        limit: 10,
      };

      const res = await request(app).get(`/api/products?${query}`);

      expect(res.status).toBe(200);
      expect(res.body.total).toBeNumber();
      expect(res.body.total).not.toBeNegative();
      expect(res.body.items).toBeArray();
      expect(res.body.items.length).toBeWithin(0, 11);
    });

    test('should have 25 or less items', async () => {
      const query = {
        limit: 10,
      };

      const res = await request(app).get(`/api/products?${query}`);

      expect(res.status).toBe(200);
      expect(res.body.total).toBeNumber();
      expect(res.body.total).not.toBeNegative();
      expect(res.body.items).toBeArray();
      expect(res.body.items.length).toBeWithin(0, 26);
    });

    test('should have 50 or less items', async () => {
      const query = {
        limit: 10,
      };

      const res = await request(app).get(`/api/products?${query}`);

      expect(res.status).toBe(200);
      expect(res.body.total).toBeNumber();
      expect(res.body.total).not.toBeNegative();
      expect(res.body.items).toBeArray();
      expect(res.body.items.length).toBeWithin(0, 51);
    });

    test('should have 100 or less items', async () => {
      const query = {
        limit: 10,
      };

      const res = await request(app).get(`/api/products?${query}`);

      expect(res.status).toBe(200);
      expect(res.body.total).toBeNumber();
      expect(res.body.total).not.toBeNegative();
      expect(res.body.items).toBeArray();
      expect(res.body.items.length).toBeWithin(0, 101);
    });

    test('should throw invalid limit error', async () => {
      const query = {
        limit: 1,
      };

      const res = await request(app).get(
        `/api/products?${querystring.stringify(query)}`
      );

      expect(res.status).toBe(422);
      expect(res.body.message).toBe(errorMessages.list.invalidLimit);
    });
  });

  describe('page', () => {
    test('throws error if page is < 1', async () => {
      const query = {
        page: 0,
      };

      const res = await request(app).get(
        `/api/products?${querystring.stringify(query)}`
      );

      expect(res.status).toBe(422);
      expect(res.body.message).toBe(errorMessages.list.invalidPage);
    });

    test('does not throw error if page is not provided ', async () => {
      const query = {
        limit: 10,
      };

      const res = await request(app).get(
        `/api/products?${querystring.stringify(query)}`
      );

      expect(res.status).toBe(200);
      expect(res.body.total).toBeNumber();
      expect(res.body.total).not.toBeNegative();
      expect(res.body.items).toBeArray();
      expect(res.body.items.length).toBeWithin(0, 11);
    });

    test('returns list and total if first page is provided', async () => {
      const query = {
        limit: 10,
        page: 1,
      };

      const res = await request(app).get(
        `/api/products?${querystring.stringify(query)}`
      );

      expect(res.status).toBe(200);
      expect(res.body.total).toBeNumber();
      expect(res.body.total).not.toBeNegative();
      expect(res.body.items).toBeArray();
      expect(res.body.items.length).toBeWithin(0, 11);
    });

    test('returns empty list if out of bound page is provided', async () => {
      const query = {
        limit: 10,
        page: 1,
      };

      const firstRes = await request(app).get(
        `/api/products?${querystring.stringify(query)}`
      );

      const totalItems = firstRes.body.total;

      const res = await request(app).get(
        `/api/products?${querystring.stringify({
          ...query,
          page: totalItems > 0 ? totalItems : 100,
        })}`
      );

      expect(res.status).toBe(200);
      expect(res.body.total).toBe(totalItems);
      expect(res.body.items).toBeArray();
      expect(res.body.items).toBeEmpty();
    });
  });
});

import supertest from 'supertest';
import app from '../app.js';
import  {expect, test} from '@jest/globals'
import { pool } from '../db/index.js'

test('GET/foods/endpoint returns 200 status code', async ()=>{
    const response = await supertest(app).get('/api/foods')
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
        success: true,
        payload: expect.any(Object)
    });
})

test('POST/foods/endpoint returns 200 status code', async ()=>{
    //const id...
    const id = "admin"
    const food = "apple"
    const response = await supertest(app)
    .post(`/api/userproducts/${id}/${food}`)
    // .send({})
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
        success: true,
        payload: [{"item_id": expect.any(Number), "product_name": "apple", "bad": null, "good": null, "user_id": "admin", }]
    });
})

afterAll(async function () {
	//close the connection to the db
	await pool.end();
});
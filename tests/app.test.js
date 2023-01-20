import request from "supertest";
import app from "../app.js";
const databaseUrl = process.env.POSTGRES_CONNECTION_URL
import {expect, test} from "@jest/globals";

test('GET /foods', async function () {
    const response = await request(app).get(databaseUrl);
    expect(response.status).toEqual(200);})
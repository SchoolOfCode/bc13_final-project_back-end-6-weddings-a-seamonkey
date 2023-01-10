import express from 'express'
export const router = express.Router()

import { getAll, getProduct } from '../models/index.js'

router.get('/foods/:searchTerm', async (req, res) => {

    const products = await getProduct(req.params.searchTerm)
    res.json({success: true, payload: products})
    console.log(req.params.searchTerm)
})

router.get('/foods/', async (req, res) => {

    const data = await getAll(req)
    res.json({success: true, payload: data})
    console.log(data)
})
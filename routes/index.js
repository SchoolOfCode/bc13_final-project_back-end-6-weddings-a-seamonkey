import express from 'express'
export const router = express.Router()

import { getProduct } from '../models/index.js'

router.get('/foods/:searchTerm', async (req, res) => {

    const products = await getProduct(req.params.searchTerm)
    res.json({success: true, payload: products})
    console.log(req.params.searchTerm)
})
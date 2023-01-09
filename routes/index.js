import express from 'express'
export const router = express.Router()

import { getProduct } from '../models'

router.get('/foods/', async (req, res) => {

    const products = await getProduct(req.params.searchTerm)
    res.json({success: true, payload: products})
})
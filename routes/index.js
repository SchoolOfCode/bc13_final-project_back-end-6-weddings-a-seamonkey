import express from 'express'
export const router = express.Router()


import { getAll, getProduct , getUserProductList, postListItem, deleteListItem } from '../models/index.js'


router.get('/foods/:searchTerm', async (req, res) => {

    const products = await getProduct(req.params.searchTerm)
    res.json({success: true, payload: products})
    // console.log(req.params.searchTerm)
})

router.get('/foods/', async (req, res) => {

    const data = await getAll(req)
    res.json({success: true, payload: data})
    // console.log(data)
})

router.get('/userproducts/:userID', async (req, res) => {

    const data = await getUserProductList(req.params.userID)
    res.json({success: true, payload: data})
    // console.log(data)
})

router.post('/userproducts/:productName/:userID', async (req, res) => {

    const data = await postListItem(req.params.productName, req.params.userID)
    res.json({success: true, payload: data})
    // console.log(data)

})

router.delete('/userproducts/:productName/:userID', async (req, res) => {

    const data = await deleteListItem(req.params.productName, req.params.userID)
    res.json({success:true, payload: data})

})
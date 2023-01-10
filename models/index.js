import {pool} from '../db/index.js'

export async function getProduct (searchTerm) {

    const productQuery = await pool.query('SELECT * FROM foods WHERE product_name ILIKE $1;', [`%${searchTerm}%`]);
    const productArr = productQuery.rows;
    console.log(productArr[0])
    return productArr[0]

}

export async function getAll () {

    const result = await pool.query('SELECT * FROM foods')
    console.log(result.rows)
    return result.rows
}
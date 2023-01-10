import {pool} from '../db/index.js'

export async function getProduct (searchTerm) {

    const productQuery = await pool.query('SELECT * FROM foods WHERE product_name = $1;', [searchTerm]);
    const productArr = productQuery.rows;
    //console.log(productArr)
    return productArr[0]

}
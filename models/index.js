import {pool} from '../db/index.js'

// I heart github

export async function getProduct (searchTerm) {

    const productQuery = await pool.query('SELECT * FROM foods WHERE product_name ILIKE $1;', [`%${searchTerm}%`]);
    const barcodeQuery = await pool.query('SELECT * FROM foods WHERE barcode_number = $1;', [searchTerm]);
    const productArr = productQuery.rows;
   
    if (typeof Number (searchTerm) === 'number') {
        console.log(barcodeQuery.rows)
        return barcodeQuery.rows
    }

    else {
        return productArr
    }

}

export async function getAll () {

    const result = await pool.query('SELECT * FROM foods')
    console.log(result.rows)
    return result.rows
}


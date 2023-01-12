import {pool} from '../db/index.js'


// I heart github

export async function getProduct (searchTerm) {

    const productQuery = await pool.query('SELECT * FROM foods WHERE product_name ILIKE $1;', [`%${searchTerm}%`]);
    const barcodeQuery = await pool.query('SELECT * FROM foods WHERE barcode_number = $1;', [searchTerm]);

    const productArr = productQuery.rows[0];

    console.log(searchTerm)
    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
      }
   
    if (containsOnlyNumbers(searchTerm) == true) {
        console.log(barcodeQuery.rows)

        return barcodeQuery.rows[0]

    }

    else {
        console.log(productArr)
        return productArr
    }

}




export async function getAll () {

    const result = await pool.query('SELECT * FROM foods')
    console.log(result.rows)
    return result.rows

}



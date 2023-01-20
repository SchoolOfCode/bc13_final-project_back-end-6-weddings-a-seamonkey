
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

export async function postListItem (userID, productName) {


    const result = await pool.query('INSERT INTO user_products (product_name, user_id) VALUES ($1,$2);', [productName, userID]);
    return result.rows
}

export async function getUserProductList (userID) {

    const result = await pool.query('SELECT * FROM user_products WHERE user_id = $1;', [userID]);
    return result.rows
}

export async function deleteListItem(userID, productName) {

    const result = await pool.query('DELETE FROM user_products WHERE user_id = $1 and product_name = $2', [userID, productName])
    return result.rows
}


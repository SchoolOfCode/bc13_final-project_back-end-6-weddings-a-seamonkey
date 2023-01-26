FODmap Backend README.md

An Application for Dietary aid for the chronically Ill.
## Installation

Install and start project on local host

```bash
  npm i
  npm run dev 
```
    
## API 

#### Get all foods

```http
  GET api/foods
```



#### Get food by name

```http
  GET /api/foods/${product_name}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `product_name`      | `string` | **Required**. Id of item to fetch |

#### Get all foods for user (for list component)

```http
  GET /api/userproducts/${user_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`user_id` | `string` | **Required**. Id of user to fetch |


#### Get all foods for user (for list component)

```http
  POST /api/userproducts/${product_name}/${user_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`user_id` | `string` | **Required**. Id of user to post |
|`product_name` | `string` | **Required**. name of product to post |




##### Delete user products for resetting list



```http
  Delete /api/userprodcuts/${user_id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. username for products to delete |
## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Tech Stack

**Client:** React, Material Ui, Quagga, Javascript, JSX, Babel, Jest, Cypress, Render

**Server:** Node, Express, Morgan, ElephantSQL, Supertest, Jest, dotenv, cors.


## Screenshots

![App Screenshot](https://i.imgur.com/U9NS62E.png)
![App Screenshot](https://i.imgur.com/5gkapNL.png)

## Demo


![App Gif](https://imgur.com/a/oPNyALl.mp4)



## Authors

- Dan[![Github Profile](https://img.shields.io/badge/Github-Profile-green.svg)](https://github.com/Cmndgrab)


- Martha[![Github Profile](https://img.shields.io/badge/Github-Profile-blue.svg)](https://github.com/MarthaBennett)

- Luke[![Github Profile](https://img.shields.io/badge/Github-Profile-orange.svg)](https://github.com/luke123adams)

- Violeta[![Github Profile](https://img.shields.io/badge/Github-Profile-red.svg)](https://github.com/violetacf)

- Rachel[![Github Profile](https://img.shields.io/badge/Github-Profile-purple.svg)](https://github.com/rachvm)


- Steve[![Github Profile](https://img.shields.io/badge/Github-Profile-maroon.svg)](https://github.com/Sunbearian)


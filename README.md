# Final Project Backend

## For Development

    - npm i
    - create .env file with PORT = '3010' + database  URL 'POSTGRES_CONNECTION_URL'

  ## Database Behaviour

  We are looking for products by name and any requests are not case-sensitive or needing the complete name.  

  ## Database Scripts

  
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



  ## Backend Deployment Link

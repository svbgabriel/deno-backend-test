# deno-backend-test

Tested with deno v1.39.4

## To start up the application

- Copy the file .env.example as .env
- Set the variables:
  - PORT: Port number (default 8080)
  - DB_URL: MongoDB URL
  - PIPEDRIVE_TOKEN: Token API of Pipedrive
  - PIPEDRIVE_BASE_URL: Pipedrive base URL
  - BLING_TOKEN: Token API of Bling
  - BLING_BASE_URL: Bling base URL
- Run the following command:
```sh
deno task dev
```

## Execution:

### Sync Pipedrive and Bling
```
POST http://localhost:PORT/integration
```
### Aggregate values
```
GET http://localhost:PORT/integration
```

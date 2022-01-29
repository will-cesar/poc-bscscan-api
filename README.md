# POC API BscScan

## Objective

This POC has as objective test the BscScan API.

## Stack

- express.js
- node.js
- TypeScript

## Details project

- Using **Express** to running the server
- Using **TypeScript** in `DEV` environment
- Using `ts-node-dev` with lib to running APP
- Using `dotenv` to hide sensitive information

## To Do

- [ ] Connect the wallet
- [ ] Show all transactions by wallet

## Run App

- To run this app, is required to create a `.env` file in the root of the project, following the requirements available in `.env.mold` file
- Fill the properties with the correspondents values

### Clone

```
git clone https://github.com/will-cesar/poc-bscscan-api.git
```

### Dev environment

```
npm run dev
```

### Prod environment

```
npm run start
```

### Build

```
npm run build
```
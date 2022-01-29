import express from "express"; 
import { Request, Response } from 'express';
import axios from 'axios';
import 'dotenv/config';

export const app = express();

app.use(express.json());

const address = process.env.WALLET_ADDRESS;
const apikey = process.env.API_KEY;

app.use('/get-bnb-balance', async (req: Request, res: Response) => {
    const module = 'account';
    const action = 'balance';
    
    const url = `https://api.bscscan.com/api?module=${module}&action=${action}&address=${address}&apikey=${apikey}`;

    try {
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        console.error(error);
    }
});

app.use('/get-transactions', async (req: Request, res: Response) => {
    const module = 'account';
    const action = 'txlist';
    const startblock = '0';
    const endblock = '99999999';
    const page = '1';
    const offset = '10';
    const sort = 'desc';

    const url = `https://api.bscscan.com/api?module=${module}&action=${action}&address=${address}&startblock=${startblock}&endblock=${endblock}&page=${page}&offset=${offset}&sort=${sort}&apikey=${apikey}`;

    try {
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        console.error(error);
    }
});

app.use('/get-token-info', async (req: Request, res: Response) => {})


app.use('/', (req: Request, res: Response) => {
    res.send('POC API BscScan');
});
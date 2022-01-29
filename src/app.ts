import express from "express"; 
import { Request, Response } from 'express';

export const app = express();

app.use(express.json());

app.use('/', (req: Request, res: Response) => {
    res.send('POC API BscScan');
});
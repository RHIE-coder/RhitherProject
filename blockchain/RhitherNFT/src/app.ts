import * as express from "express";
import { Request, Response, NextFunction } from 'express';
import config from "./config/configurations"

const app = express();

// Parsing
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// Request Logging on Console
app.use("/", (req: Request, res: Response, next: NextFunction) =>{
    console.log({
        method : req.method,
        url : req.url,
    });
    next();
});

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('hello express');
});

app.listen(config.server_port, ()=>{
    console.log(`[ Rhither NFT ] Server is listening at http://localhost:${config.server_port}`)
});
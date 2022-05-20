import * as express from "express";
import { Express, Request, Response, NextFunction, Router } from 'express';
import * as path from "path";
import * as ejs from "ejs";
import config from "./config/configurations"
import * as routerLoader from "./routes/route-loader"
import * as viewsLoader from "./views/views-loader"

const app: Express = express();

// View Setting
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));

// Static
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

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

// Router Load
routerLoader.init(app);

// Views Load
viewsLoader.init(app);


// Server Open
app.listen(config.server_port, ()=>{
    console.log(`[ Rhither Center ] Server is listening at http://localhost:${config.server_port}`)
});
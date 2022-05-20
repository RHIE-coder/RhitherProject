import * as fs from "fs";
import * as path from "path";
import { Express } from "express";

/** 
 * @author rhie-coder
 * @dev This module helps you to import routing files and inject routing informations to application context automatically.
 *      This module is based on "Express 4"
 *      
 *      [ Setting Option Keywords ]
 *      - ignore
 *      - params
 *      - path
 * 
 * @param app The express app instance that is taken by using "express()"
 */ 
function init(app: Express) {
    const routerlist = path.join(__dirname, "./src")
    const filelist = fs.readdirSync(routerlist).map(file => path.basename(file, path.extname(file)))

    filelist.forEach(filename => {
        const routerinfo = require(`./src/${filename}`);
        const params: string[] = []
        
        if (!routerinfo.ignore) {
            if (routerinfo.params) routerinfo.params.forEach( (name:string) => params.push(app.get(name)));
            const router = Reflect.apply(
                routerinfo.routers,
                undefined,
                params
            )
            app.use(routerinfo?.path ?? '/', router);
        }
    })
}

module.exports.init = init
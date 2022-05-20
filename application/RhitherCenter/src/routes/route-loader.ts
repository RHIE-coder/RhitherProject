import * as fs from "fs";
import * as path from "path";
import { Express } from "express";
import { RouteElement }  from "../extensions/Routing";

/** 
 * @author rhie-coder
 * @dev This module helps you to import routing files and inject routing informations to application context automatically.
 *      This module is based on "Express 4"
 *      
 *      [ Setting Option Keywords ]
 *      - ignore
 *      - root_path
 * 
 * @param app The express app instance that is taken by using "express()"
 * @dependencyFile extentions/Routing.ts
 */ 
export function init(app: Express) {
    const routerlist = path.join(__dirname, "./src")
    const filelist = fs.readdirSync(routerlist).map(file => path.basename(file, path.extname(file)))

    filelist.forEach(async(filename) =>{
        const element:RouteElement = await import(`./src/${filename}`);
        if (!element?.options?.ignore) {
            app.use(element.options?.root_path ?? '/', element.router);
        }
    })
}
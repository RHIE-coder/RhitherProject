import { Express, Router, Request, Response } from "express";
import { ViewElement } from "../extensions/Viewer";

/** 
 * @author rhie-coder
 * @dev This module helps you to import view files and inject rendering informations to application context automatically.
 *      This module is based on "Express 4"
 *      
 * @param app The express app instance that is taken by using "express()"
 * @dependencyFile views.ts, extentions/Viewer.ts
 */ 
export async function init(app: Express) {
    const router = Router();
    const viewlist:ViewElement[] = await import("./views");
    viewlist.forEach((viewElem:ViewElement) => {
        router.route(viewElem.path).get((_, res:Response)=>{
            res.render(viewElem.html);
        })
    })
    app.use("/", router);
}
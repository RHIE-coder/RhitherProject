// import { Router } from "express";

// export enum RequestMethod {
//     GET, POST, PUT, DELETE
// }

// export type routeInfo = {
//     method: RequestMethod,
//     url: string,
// }

// export function route(info:routeInfo) {
//     return (target:any, propertyKey:string, descriptor: PropertyDescriptor) => {
//         descriptor.enumerable = true;
//         console.log(target);
//         console.log(propertyKey);
//         console.log(descriptor);
//     }
// }

// export function controller(root_url?:string) {
//     return function(target:any){
//         const t = new target();
//         for(const m in t){
//             console.log(m);
//         }
//     }
// }

// export abstract class Routing {
//     protected router : Router = Router();
// }

// @controller()
// export default class extends Routing {

//     @route({url:"/",method:RequestMethod.GET})
//     get(req,res){
//         console.log("get method");
//     }

//     @route({url:"/", method:RequestMethod.POST})
//     post(){
//         console.log("post method");
//     }

//     @route({url:"/",method:RequestMethod.PUT})
//     put(){
//         console.log("put method");
//     }

//     @route({url:"/",method:RequestMethod.DELETE})
//     delete(){
//         console.log("delete method");
//     }
// }
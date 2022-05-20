// import { Router } from "express";

// function anno(uri:string) {

//     console.log("anno!!!" + uri)

//     return (target:any, propertyKey:string, descriptor: PropertyDescriptor) => {
//         descriptor.enumerable = true;
//         console.log(target);
//         console.log(propertyKey);
//         console.log(descriptor);
//     }
// }

// function klazz() {
//     console.log("______________hello");
//     return function(target:any){
//         console.log(target);
//         const t = new target();
//         for(const m in t){
//             console.log(m);
//         }
//     }
// }


// abstract class Routing {
//     protected router : Router = Router();
// }
// @klazz()
// export default class extends Routing {
//     @anno("/")
//     getAccount(){
//         console.log("hel")
//     }

//     @anno("/1")
//     getAccount1(){
//         console.log("hel1")
//     }

//     @anno("/2")
//     getAccount2(){
//         console.log("hel2")
//     }
// }
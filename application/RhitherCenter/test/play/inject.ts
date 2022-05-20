import { Router } from "express";

function anno(uri:string) {

    console.log("anno!!!" + uri)

    return (target:any, propertyKey:string, descriptor: PropertyDescriptor) => {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    }
}

function klazz(cls:any) {
    console.log("______________hello");
    return function(target:any){
        const t = new target();
        t.sample();
        console.log(cls);
    }
}

abstract class Routing {
    protected router : Router = Router();

    abstract set() :void ;
}

@klazz(A)
export default class A extends Routing{

    constructor(){
        super();
    }

    @anno("ff")
    get(){
        console.log("world");
    }

    @anno("gg")
    set() {
        console.log("hello");
    }

    sample(){
        console.log("sssssssssssss")
    }
}
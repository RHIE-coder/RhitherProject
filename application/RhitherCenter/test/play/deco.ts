function f() {
    console.log("f(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

function h() {
    console.log("h(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("h(): called");
    }
}

function inject() {
    const msg : string = "hello world";

    return function(target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor.value(msg);
    }
}

const t = {
    options : {
        path:"/eth/call"
    },

    
    routers : () => {
        console.log("hello")
    }
}

// class T{

//     @inject()
//     static helloMyMethod(msg: string){
//         console.log("test is called : " + msg);
//     }
// }


// T.helloMyMethod();

// @h()
// class C {
//     // @f()
//     // @g()
//     // method() {}


//     method() {}
// }


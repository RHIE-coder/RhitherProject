module.exports = class {
    constructor(...data){
        this.data = data;
    }

    add(){
        return [...this.data].reduce((p, c) => p + c);
    }

    mul(){
        return [...this.data].reduce((p, c) => p * c);
    }
}
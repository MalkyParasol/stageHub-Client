export class Provider {
    name!:string;
    phone!:string;
    email!:string;
    product!:string;
    price!:Number;
    password!:string;
    list:string[] = ["products"];
    constructor(data?: Partial<Provider>) {
        Object.assign(this, data);
    }
}
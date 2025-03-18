export class Director {

    name!: string;
    phone!: string;
    email!: string;
    password!: string;
    publicPassword!: string;
    list: string[] = ["coaches", "actors", "providers"]

    constructor(data?: Partial<Director>) {
        Object.assign(this, data);
    }
}
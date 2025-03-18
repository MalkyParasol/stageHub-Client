export class Manager {

    name!: string;
    phone!: string;
    email!: string;
    password!: string;
    list: string[]=["directors"];
    constructor(data?: Partial<Manager>) {
        Object.assign(this, data);
    }
}
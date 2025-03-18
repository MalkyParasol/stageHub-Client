export class Actor {
    name!: string;
    role!:string;
    coachId!:string;
    directorId!:string;
    phone!:string;
    email!:string;
    password!:string;
    list:string[] = ["coaches"]

    constructor(data?: Partial<Actor>) {
        Object.assign(this, data);
    }
}
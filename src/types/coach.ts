import { Specialization } from "../enums/specialization.enum";

export class Coach {
    name!:string;
    role!:Specialization;
    coachId!:string;
    directorId!:string;
    phone!:string;
    email!:string;
    password!:string;
    list:string[] = ["actors"]

    constructor(data?: Partial<Coach>) {
        Object.assign(this, data);
    }
}
import { Specialization } from "../enums/specialization.enum";

export interface Actor {
    name:string;
    role:Specialization;
    coachId:string;
    directorId:string;
    phone:string;
    email:string;
    password:string;
}
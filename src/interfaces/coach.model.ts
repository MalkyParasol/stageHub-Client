import { Specialization } from "../enums/specialization.enum";

export interface Actor {
    name:String;
    role:Specialization;
    coachId:String;
    directorId:String;
    phone:String;
    email:String;
    password:String;
}
import { office } from "src/enum/enumoffice";

export class Employee{
    id: number;
    name: string;
    cpf: number;
    office: office;
    birthday: Date;

    constructor(name: string, cpf: number, office: office, birthday: Date){
        this.name = name;
        this.cpf = cpf;
        this.office = office;
        this.birthday = birthday;
    }
};






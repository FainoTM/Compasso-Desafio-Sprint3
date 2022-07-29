export class Employee{
    id: number;
    name: string;
    cpf: number;
    office: string;
    birthday: Date;

    constructor(name: string, cpf: number, office: string, birthday: Date){
        this.name = name;
        this.cpf = cpf;
        this.office = office;
        this.birthday = birthday;
    }
};






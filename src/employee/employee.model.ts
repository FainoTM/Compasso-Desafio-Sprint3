import { office } from "src/enum/enumoffice";
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class Employee{
    id: number;


    @IsNotEmpty({
        message: 'Nome do empregado é obrigatório'
    })
    @IsString({
        message: 'Nome inválido'
    })
    name: string;
    
    @IsNotEmpty({
        message: 'cpf é obrigatório'
    })
    @IsNumber({}, {
        message: 'cpf Inválido'
    })
    cpf: number;
    
    @IsNotEmpty({
        message: 'cargo do funcionário é obrigatório'
    })
    @IsEnum(office)
    office: office;
    
    @IsNotEmpty({
        message: 'Data de nascimento é obrigatório'
    })
    birthday: Date;

};






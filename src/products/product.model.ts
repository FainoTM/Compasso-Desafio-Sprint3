import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class Product{
    product_id: number;

    @IsNotEmpty({
        message: 'Nome do produto é obrigatório'
    })
    @IsString({
        message: 'Nome inválido'
    })
    name: string;

    @IsNotEmpty({
        message: 'Nome da categoria é obrigatório'
    })
    @IsString({
        message: 'Categoria inválida'
    })
    category: string;

    @IsNotEmpty({
        message: 'preço é obrigatório'
    })
    @IsNumber({}, {
        message: 'Preço Inválido'
    })
    price: number;

    employee_id: number;
    
};

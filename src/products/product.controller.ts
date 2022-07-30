import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from "@nestjs/common";
import { Response } from "express";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Controller('employee')
export class employeeController{
    constructor(private productService: ProductService){}

    @Get()
    getallProducts(){
        return this.productService.getallProducts();
    }

    @Get(":id")
    getoneProduct(@Param('id') id: string){
        return this.productService.getoneProduct(id);
    }
    
    @Post()
    create(@Body() employee: Product, @Res() res: Response){
        this.productService.create(employee);
        res.status(HttpStatus.CREATED).send("Produto cadastrado");
        res.status(HttpStatus.BAD_REQUEST).send("Ocorreu um erro de contrato");
    }

    @Put(':id')
    change(@Param('id') id:string, @Body() employee: Product){
        return this.productService.change(id, employee);
    }

    @Delete(":id")
    delete(@Param() params, @Res() res: Response){
        this.productService.delete(params.id)
        res.status(HttpStatus.CREATED).send("Produto deletado");
    }
}
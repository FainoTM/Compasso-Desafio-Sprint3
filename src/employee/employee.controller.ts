import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from "@nestjs/common";
import { Response } from "express";
import { Employee } from "./employee.model";
import { EmployeeService } from "./employee.service";

@Controller('employee')
export class employeeController{
    constructor(private employeeService: EmployeeService){}

    @Get()
    getallEmployee(){
        return this.employeeService.getallEmployee();
    }

    @Get(":id")
    getoneEmployee(@Param('id') id: string){
        return this.employeeService.getoneEmployee(id);
    }
    
    @Post()
    create(@Body() employee: Employee, @Res() res: Response){
        this.employeeService.create(employee);
        res.status(HttpStatus.CREATED).send("Funcionário cadastrado");
        res.status(HttpStatus.BAD_REQUEST).send("Ocorreu um erro de contrato");
    }

    @Put(':id')
    change(@Param('id') id:string, @Body() employee: Employee){
        return this.employeeService.change(id, employee);
    }

    @Delete(":id")
    delete(@Param() params, @Res() res: Response){
        this.employeeService.delete(params.id)
        res.status(HttpStatus.CREATED).send("Funcionário deletado");
        res.status(HttpStatus.BAD_REQUEST).send("Ocorreu um erro de contrato");
    }
}
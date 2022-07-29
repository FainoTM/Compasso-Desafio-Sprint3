import { Body, Controller, Delete, Get, Param, Post, Put, Res, Response } from "@nestjs/common";
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
    create(@Body() employee: Employee){
        this.employeeService.create(employee);
    }

    @Put(':id')
    change(@Param('id') id:string, @Body() employee: Employee){
        return this.employeeService.change(id, employee);
    }

    @Delete(":id")
    delete(@Param() params){
        this.employeeService.delete(params.id)
    }
}
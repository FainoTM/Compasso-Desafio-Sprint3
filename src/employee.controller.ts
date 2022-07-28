import { Controller, Get, Param } from "@nestjs/common";
import { Employee } from "./employee.model";
import { EmployeeService } from "./employee.service";

@Controller('employee')
export class employeeController{
    constructor(private employeeService: EmployeeService){

    }

    @Get()
    getallEmployee(): Employee[]{
        return this.employeeService.getallEmployee();
    }

    @Get(":id")
    getoneEmployee(@Param() params): Employee{
        return this.employeeService.getoneEmployee(params.id);
    }
    
}
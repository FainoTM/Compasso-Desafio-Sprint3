import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { employeeController } from "./employee.controller";
import { employee, EmployeeSchema } from "./employee.schema";
import { EmployeeService } from "./employee.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'employee', schema: EmployeeSchema }])],
    controllers: [employeeController],
    providers: [EmployeeService]
})

export class EmployeeModule{}
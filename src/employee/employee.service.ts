import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Employee } from "./employee.model";
import { employeeDocument } from "./employee.schema";

@Injectable()
export class EmployeeService{

    constructor(@InjectModel('employee') private readonly EmployeeModel : Model<employeeDocument>){}

    async getallEmployee(){
        return await this.EmployeeModel.find().exec()
    }

    async getoneEmployee(id: string){
        return await this.EmployeeModel.findById(id).exec();
    }

    async create(employee: Employee){
        const created = new this.EmployeeModel(employee);
        return await created.save();
    }

    async change(id: string, employee: Employee){
        await this.EmployeeModel.updateOne({_id: id}, employee).exec();
        return this.getoneEmployee(id);
    }

    async delete(id: string){
        return await this.EmployeeModel.deleteOne({_id: id}).exec();
    }

}
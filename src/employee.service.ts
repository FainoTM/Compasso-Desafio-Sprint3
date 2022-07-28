import { Employee } from "./employee.model";

export class EmployeeService{
    employee: Employee[] = []

    getallEmployee(): Employee[]{
        return this.employee;
    }

    getoneEmployee(id: number): Employee{
        return this.employee[id];
    }

    create(employee: Employee){
        this.employee.push(employee);
    }

    change(employee: Employee): Employee{
        return employee;
    }

    delete(id: number){
        this.employee.pop()
    }

}
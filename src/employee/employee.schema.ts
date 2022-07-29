import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type employeeDocument = employee & Document;

@Schema()
export class employee {

  @Prop({required: true})
  name: string;

  @Prop({required: true})
  cpf: number;

  @Prop({required: true})
  office: string;

  @Prop({required: false})
  birthday: number;

}

export const EmployeeSchema = SchemaFactory.createForClass(employee);
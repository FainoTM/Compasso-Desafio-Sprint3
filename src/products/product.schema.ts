import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type productDocument = product & Document;

@Schema()
export class product {

  @Prop({required: true})
  name: string;

  @Prop({required: true})
  category: string;

  @Prop({required: true})
  price: number;
  
  @Prop()
  employee_id: number;
  
}

export const ProductSchema = SchemaFactory.createForClass(product);
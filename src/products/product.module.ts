import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { productController } from "./product.controller";
import { ProductSchema } from "./product.schema";
import { ProductService } from "./product.service";



@Module({
    imports: [MongooseModule.forFeature([{ name: 'product', schema: ProductSchema }])],
    controllers: [productController],
    providers: [ProductService]
})

export class ProductModule{}
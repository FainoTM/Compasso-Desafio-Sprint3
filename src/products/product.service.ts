import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./product.model";
import { productDocument } from "./product.schema";

@Injectable()
export class ProductService{

    constructor(@InjectModel('product') private readonly ProductModel : Model<productDocument>){}

    async getallProducts(){
        return await this.ProductModel.find().exec()
    }

    async getoneProduct(id: string){
        return await this.ProductModel.findById(id).exec();
    }

    async create(product: Product){
        const created = new this.ProductModel(product);
        return await created.save();
    }

    async change(id: string, product: Product){
        await this.ProductModel.updateOne({_id: id}, product).exec();
        return this.getoneProduct(id);
    }

    async delete(id: string){
        return await this.ProductModel.deleteOne({_id: id}).exec();
    }

}
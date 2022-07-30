import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from 'src/employee/employee.module';
import { ProductModule } from './products/product.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://theofaino:gDxagexUpbyYzC7h@cluster0.9pyfq.mongodb.net/employeecontroller?retryWrites=true&w=majority'),
    EmployeeModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

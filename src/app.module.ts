import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from 'src/employee/employee.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://theofaino:gDxagexUpbyYzC7h@cluster0.9pyfq.mongodb.net/employeecontroller?retryWrites=true&w=majority'),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

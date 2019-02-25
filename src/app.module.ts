import { Module } from '@nestjs/common';
import { TeacherModule } from './teacher/teacher.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from 'typeorm'

@Module({
  imports: [TeacherModule,
  TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }

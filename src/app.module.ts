import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typerOrmConfig } from './config/typeorm.config';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [TypeOrmModule.forRoot(typerOrmConfig), TasksModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class AppModule {}

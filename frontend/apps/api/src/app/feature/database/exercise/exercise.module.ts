import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from './exercise.entity';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';

@Module({
  imports: [    
    TypeOrmModule.forFeature([Exercise]),    
  ],
  providers: [ ExerciseService],
  controllers: [ExerciseController],
  exports: [TypeOrmModule]
})
export class ExerciseModule { }

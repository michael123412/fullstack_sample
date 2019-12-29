import { Controller, Get } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { Exercise } from './exercise.entity';


@Controller('exercises')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  getData(): Promise<Exercise[]> {
    return this.exerciseService.findAll();
  }
}

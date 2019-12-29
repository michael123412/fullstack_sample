import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from './exercise.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise)
    private readonly exerciseRepository: Repository<Exercise>
  ) {}

  findAll(): Promise<Exercise[]> {
    return this.exerciseRepository.find();
  }

  find(id: string) {
    return this.exerciseRepository.findOne(id);
  }

  add(exerciseDto: Exercise) {
    const exercise = this.exerciseRepository.create(exerciseDto);
    const results = this.exerciseRepository.save(exercise);
    return results;
  }

  async update(exerciseDto: Exercise) {
    const exercise = await this.exerciseRepository.findOne(exerciseDto.id);
    this.exerciseRepository.merge(exercise, exerciseDto);
    const results = this.exerciseRepository.save(exercise);
    return results;
  }

  delete(id: string) {
      const result = this.exerciseRepository.delete(id);
      return result;
  }
}

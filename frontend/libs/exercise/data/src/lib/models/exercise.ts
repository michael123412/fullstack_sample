import { ExerciseType } from './exercise-type.enum';

export interface Exercise {
    id: string;
    name: string;
    description: string;
    type: ExerciseType;
}
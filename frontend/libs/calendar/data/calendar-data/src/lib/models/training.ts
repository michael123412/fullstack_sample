import { Exercise } from '@fitness-app/exercise/data';

export interface Training {
    id: string;
    exercise: Exercise;
    exerciseId: string;
    repetitions: number;
    note: string;
    done: boolean;
    order: number;        
}

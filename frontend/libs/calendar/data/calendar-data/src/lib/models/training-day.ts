import { Training } from './training';

export interface TrainingDay {
    id: string;
    date: string;
    trainings: Training[];
}

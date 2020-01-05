import { Training } from './training';

export interface TrainingDay {
    id: string;
    date: Date;
    trainings: Training[];
}

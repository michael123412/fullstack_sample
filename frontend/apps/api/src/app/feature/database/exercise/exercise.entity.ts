import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  type: 'undefined' | 'strength' | 'endurance' | 'combination';

  @Column()
  region: 'undefined' | 'arms' | 'legs' | 'stomach' | 'back'
}
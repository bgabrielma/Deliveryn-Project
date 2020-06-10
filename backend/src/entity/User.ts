import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  AfterUpdate,
  BeforeInsert,
} from 'typeorm';

import { DateEntity } from './DateEntity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  providerId: number;

  @Column()
  password: string;

  @Column()
  citizenCard: string;

  @Column(() => DateEntity, { prefix: false })
  dateEntity: DateEntity;
}

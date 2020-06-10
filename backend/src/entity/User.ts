import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  AfterUpdate,
  BeforeInsert,
  ManyToOne,
} from 'typeorm';

import { DateEntity } from './DateEntity';
import { Role } from './Role';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Role, (role) => role.id)
  role: Role;

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

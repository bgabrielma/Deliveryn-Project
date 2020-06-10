import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  AfterUpdate,
} from 'typeorm';

import { DateEntity } from './DateEntity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  roleDesignation: string;

  @Column(() => DateEntity, { prefix: false })
  dateEntity: DateEntity;
}

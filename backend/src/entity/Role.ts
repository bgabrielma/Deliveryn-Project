import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  AfterUpdate,
  ManyToMany,
  OneToMany,
} from 'typeorm';

import { User } from './User';

import { DateEntity } from './DateEntity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  roleDesignation: string;

  @Column(() => DateEntity, { prefix: false })
  dateEntity: DateEntity;

  @OneToMany(() => User, (user) => user.role)
  user: User;
}

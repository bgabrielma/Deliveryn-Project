import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { StatusType } from '../utils/utils';

import { UserSituation } from './UserSituation';
import { DateEntity } from './DateEntity';

@Entity()
export class UserStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => UserSituation, (UserSituation) => UserSituation.userStatus)
  userSituation: UserSituation;

  @Column()
  status: StatusType;

  @Column(() => DateEntity, { prefix: false })
  dateEntity: DateEntity;
}

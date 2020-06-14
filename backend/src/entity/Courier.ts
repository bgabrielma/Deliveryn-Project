import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { UserEntity } from './UserEntity';
import { UserSituation } from './UserSituation';
import { DateEntity } from './DateEntity';

@Entity()
export class Courier {
  @Column(() => UserEntity, { prefix: false })
  userEntity: UserEntity;

  @Column()
  phoneWork: string;

  @Column()
  driveLicense: string;

  @Column()
  about: string;

  @Column(() => DateEntity, { prefix: false })
  dateEntity: DateEntity;

  @OneToMany(() => UserSituation, (userSituation) => userSituation.courierId)
  userSituation!: UserSituation;
}

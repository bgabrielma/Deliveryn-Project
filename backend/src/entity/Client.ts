import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { UserEntity } from './UserEntity';
import { UserSituation } from './UserSituation';
import { DateEntity } from './DateEntity';

import { Provider } from '../utils/utils';

@Entity()
export class Client {
  @Column()
  providerId: number;

  @Column()
  provider: Provider;

  @Column()
  phoneNumber: string;

  @Column(() => UserEntity, { prefix: false })
  userEntity: UserEntity;

  @Column(() => DateEntity, { prefix: false })
  dateEntity: DateEntity;

  @OneToMany(() => UserSituation, (userSituation) => userSituation.clientId)
  userSituation!: UserSituation;
}

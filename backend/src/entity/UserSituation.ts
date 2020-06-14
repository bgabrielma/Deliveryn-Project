import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { UserStatus } from './UserStatus';
import { Client } from './Client';
import { Courier } from './Courier';

@Entity({ name: 'user_situation' })
export class UserSituation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userStatusId!: string;

  @Column()
  clientId!: string;

  @Column()
  courierId!: string;

  @ManyToOne(() => UserStatus, (userStatus) => userStatus.userSituation)
  @JoinColumn({ name: 'userStatusId' })
  userStatus!: UserStatus;

  @ManyToOne(() => Client, (client) => client.userSituation)
  @JoinColumn({ name: 'clientId' })
  client!: Client;

  @ManyToOne(() => Courier, (courier) => courier.userSituation)
  @JoinColumn({ name: 'courierId' })
  courier!: Client;
}

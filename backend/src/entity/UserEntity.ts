import { PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { ImageEntity } from './ImageEntity';
import { UserSituation } from './UserSituation';

export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  nif: String;

  @Column()
  address: string;

  @Column()
  password: string;

  @Column()
  citizenCard: string;

  @Column(() => ImageEntity, { prefix: false })
  imageEntity: ImageEntity;
}

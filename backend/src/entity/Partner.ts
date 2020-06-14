import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { ImageEntity } from './ImageEntity';
import { DateEntity } from './DateEntity';

@Entity()
export class Partner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  termsAndConditions: string;

  @Column()
  citizenColectiveCard: string;

  @Column(() => ImageEntity, { prefix: false })
  imageEntity: ImageEntity;

  @Column(() => DateEntity, { prefix: false })
  dateEntity: DateEntity;
}

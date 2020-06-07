import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  AfterUpdate,
  BeforeInsert,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

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

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @AfterUpdate()
  setUpdatedValue() {
    this.updatedAt = new Date();
  }

  @BeforeInsert()
  setInsertedValue() {
    this.createdAt = this.updatedAt = new Date();
  }
}

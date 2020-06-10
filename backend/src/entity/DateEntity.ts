import { AfterUpdate, BeforeInsert, Column } from 'typeorm';

export class DateEntity {
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

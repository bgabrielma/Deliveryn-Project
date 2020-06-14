import { Column } from 'typeorm';

export class ImageEntity {
  @Column()
  image: string;

  @Column()
  banner: string;
}

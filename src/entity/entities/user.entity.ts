import {Entity, PrimaryColumn, Column} from 'typeorm';

@Entity({name: 'tbl_dimUsers'})
export class User {

  @PrimaryColumn()
  userId: string;

  @Column()
  email: string;
}
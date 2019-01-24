import {
  Index,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
  RelationId,
} from 'typeorm';


@Entity('tbl_dimUsers', { schema: 'dbo' })
export class tblDimUsers {

  @Column('nvarchar', {
    nullable: true,
    length: 50,
    name: 'userId',
  })
  userId: string | null;

  @Column('nvarchar', {
    nullable: true,
    length: 255,
    name: 'email',
  })
  email: string | null;


  @Column('nvarchar', {
    nullable: true,
    length: 255,
    name: 'firstName',
  })
  firstName: string | null;


  @Column('nvarchar', {
    nullable: true,
    length: 255,
    name: 'lastName',
  })
  lastName: string | null;


  @Column('nvarchar', {
    nullable: true,
    length: 10,
    name: 'active',
  })
  active: string | null;


  @Column('nvarchar', {
    nullable: true,
    length: 50,
    name: 'siteId',
  })
  siteId: string | null;


  @Column('nvarchar', {
    nullable: true,
    length: 50,
    name: 'role',
  })
  role: string | null;


  @Column('nvarchar', {
    nullable: true,
    length: 50,
    name: 'employeeId',
  })
  employeeId: string | null;


  @Column('nvarchar', {
    nullable: true,
    length: 10,
    name: 'mailPreferences',
  })
  mailPreferences: string | null;


  @Column('time', {
    nullable: true,
    name: 'intermediateTime',
  })
  intermediateTime: Date | null;

}

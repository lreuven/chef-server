import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("xxxxx",{schema:"dbo"})
export class xxxxx {

    @Column("timestamp",{ 
        nullable:false,
        name:"TS"
        })
    ts:Date;
        
}

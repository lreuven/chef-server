import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimTime",{schema:"dbo"})
export class tblDimTime {

    @Column("nvarchar",{ 
        nullable:true,
        length:4,
        name:"openedHourKey"
        })
    openedHourKey:string | null;
        
}

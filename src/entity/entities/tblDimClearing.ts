import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimClearing",{schema:"dbo"})
export class tblDimClearing {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"clearingName"
        })
    clearingName:string | null;
        
}

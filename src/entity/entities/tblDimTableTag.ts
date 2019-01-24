import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimTableTag",{schema:"dbo"})
export class tblDimTableTag {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"mainTableTag"
        })
    mainTableTag:string | null;
        
}

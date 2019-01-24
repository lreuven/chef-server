import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimExternalSource",{schema:"dbo"})
export class tblDimExternalSource {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"externalSource"
        })
    externalSource:string | null;
        
}

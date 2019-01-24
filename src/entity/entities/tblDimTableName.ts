import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimTableName",{schema:"dbo"})
export class tblDimTableName {

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"tableName"
        })
    tableName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        
}

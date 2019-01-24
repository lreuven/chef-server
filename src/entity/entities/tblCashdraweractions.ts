import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_cashdraweractions",{schema:"dbo"})
export class tblCashdraweractions {

    @Column("nvarchar",{ 
        nullable:true,
        name:"RAW_DOCUMENT"
        })
    rawDocument:string | null;
        
}

import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_issuerNameTEMP",{schema:"dbo"})
export class tblIssuerNameTemp {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"id"
        })
    id:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"tlogId"
        })
    tlogId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"issuerName"
        })
    issuerName:string | null;
        
}

import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimReasonsStatic",{schema:"dbo"})
export class tblDimReasonsStatic {

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"reasonType"
        })
    reasonType:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"reasonTypeName"
        })
    reasonTypeName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"reasonSubTypeKey"
        })
    reasonSubTypeKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"reasonSubTypeName"
        })
    reasonSubTypeName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"reasonIdKey"
        })
    reasonIdKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"reasonName"
        })
    reasonName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"ROLE_siteId"
        })
    roleSiteId:string | null;
        
}

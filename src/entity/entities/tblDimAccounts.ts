import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimAccounts",{schema:"dbo"})
export class tblDimAccounts {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"type"
        })
    type:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"Id"
        })
    id:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"name"
        })
    name:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"hqName"
        })
    hqName:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"typeId"
        })
    typeId:number | null;
        
}

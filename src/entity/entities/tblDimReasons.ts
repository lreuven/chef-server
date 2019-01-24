import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimReasons",{schema:"dbo"})
export class tblDimReasons {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"reasonId"
        })
    reasonId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"reasonName"
        })
    reasonName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:100,
        name:"reasonType"
        })
    reasonType:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:100,
        name:"returnType"
        })
    returnType:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:100,
        name:"othType"
        })
    othType:string | null;
        
}

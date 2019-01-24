import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimSites",{schema:"dbo"})
export class tblDimSites {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"siteName"
        })
    siteName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:52,
        name:"siteHqId"
        })
    siteHqId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"siteHqName"
        })
    siteHqName:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:5,
        name:"isActive"
        })
    isActive:string;
        

    @Column("smalldatetime",{ 
        nullable:true,
        name:"liveAt"
        })
    liveAt:Date | null;
        
}

import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_billing",{schema:"dbo"})
export class tblBilling {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"yYear"
        })
    yYear:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"mMonth"
        })
    mMonth:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"type"
        })
    type:string | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"jsonDataCompress"
        })
    jsonDataCompress:Buffer | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        name:"jsonDataDecompressed"
        })
    jsonDataDecompressed:string | null;
        
}

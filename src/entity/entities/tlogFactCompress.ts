import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tlogFactCompress",{schema:"dbo"})
export class tlogFactCompress {

    @Column("binary",{ 
        nullable:true,
        length:8,
        name:"TS"
        })
    ts:Buffer | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"tlogId"
        })
    tlogId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"businessDate"
        })
    businessDate:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"jsonCreated"
        })
    jsonCreated:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"processingStatus"
        })
    processingStatus:string | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"jsonDataCompress"
        })
    jsonDataCompress:Buffer | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdDate"
        })
    createdDate:Date | null;
        

    @Column("uniqueidentifier",{ 
        nullable:true,
        name:"batchId"
        })
    batchId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"processStatus"
        })
    processStatus:string | null;
        
}

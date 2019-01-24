import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_siteBusinessDateSummary",{schema:"dbo"})
@Index("uci_siteId_businessDate",["siteId","businessDate",],{unique:true})
export class tblSiteBusinessDateSummary {

    @Column("timestamp",{ 
        nullable:false,
        name:"TS"
        })
    ts:Date;
        

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
        

    @Column("date",{ 
        nullable:true,
        name:"businessDate"
        })
    businessDate:Date | null;
        

    @Column("bit",{ 
        nullable:true,
        name:"isEod"
        })
    isEod:boolean | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tlogCountMongo"
        })
    tlogCountMongo:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalPaymentsMongo"
        })
    totalPaymentsMongo:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tlogCountDwh"
        })
    tlogCountDwh:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalPaymentsDwh"
        })
    totalPaymentsDwh:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"lastUpdated"
        })
    lastUpdated:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        name:"JSONDATA"
        })
    jsondata:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"cubeTlogCount"
        })
    cubeTlogCount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"cubeTlogAmount"
        })
    cubeTlogAmount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"eodMailId"
        })
    eodMailId:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"cubeTlogSalesAmount"
        })
    cubeTlogSalesAmount:number | null;
        
}

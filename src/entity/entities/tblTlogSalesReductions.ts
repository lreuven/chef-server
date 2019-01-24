import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_tlogSalesReductions",{schema:"dbo"})
@Index("ix_tlogid",["tlogId",])
export class tblTlogSalesReductions {

    @Column("timestamp",{ 
        nullable:false,
        name:"TS"
        })
    ts:Date;
        

    @Column("nvarchar",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"saleId"
        })
    saleId:string;
        

    @Column("nvarchar",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"tlogId"
        })
    tlogId:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"reasonId"
        })
    reasonId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"reasonName"
        })
    reasonName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"approvedBy"
        })
    approvedBy:string | null;
        

    @Column("datetimeoffset",{ 
        nullable:true,
        name:"approvedOn"
        })
    approvedOn:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"promotionId"
        })
    promotionId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"rewardId"
        })
    rewardId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"reasonType"
        })
    reasonType:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"reasonTypeHebrew"
        })
    reasonTypeHebrew:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"reasonSubType"
        })
    reasonSubType:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"reasonSubTypeHebrew"
        })
    reasonSubTypeHebrew:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"operationalDiscountAmount"
        })
    operationalDiscountAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"organizationalDiscountAmount"
        })
    organizationalDiscountAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"retentionDiscountAmount"
        })
    retentionDiscountAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"cancellationAmount"
        })
    cancellationAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"otherDiscountAmount"
        })
    otherDiscountAmount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"OLAP_PARTITION"
        })
    olapPartition:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"externalId"
        })
    externalId:string | null;
        
}

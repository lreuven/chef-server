import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_olap_fact_tlogRedimcode2017",{schema:"dbo"})
@Index("ix_siteIdBusinessDate",["siteId","businessDate",])
@Index("ucitlogId",["tlogId",])
export class tblOlapFactTlogRedimcode2017 {

    @Column("nvarchar",{ 
        nullable:false,
        length:50,
        name:"tlogId"
        })
    tlogId:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"businessDate"
        })
    businessDate:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"zNumber"
        })
    zNumber:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"groupSize"
        })
    groupSize:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"timeOffset"
        })
    timeOffset:number | null;
        

    @Column("datetimeoffset",{ 
        nullable:true,
        name:"opened"
        })
    opened:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"openedDateKey"
        })
    openedDateKey:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:10,
        name:"openedHourKey"
        })
    openedHourKey:string | null;
        

    @Column("datetimeoffset",{ 
        nullable:true,
        name:"closed"
        })
    closed:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:10,
        name:"closedDateKey"
        })
    closedDateKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:10,
        name:"closedHourKey"
        })
    closedHourKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:5,
        name:"loyalty"
        })
    loyalty:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"ownerId"
        })
    ownerId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:5,
        name:"isStaff"
        })
    isStaff:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"source"
        })
    source:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"orderNumber"
        })
    orderNumber:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"deviceName"
        })
    deviceName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"serviceName"
        })
    serviceName:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"serviceTime"
        })
    serviceTime:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"serviceKey"
        })
    serviceKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"orderType"
        })
    orderType:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"OLAP_PARTITION"
        })
    olapPartition:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"processingStatus"
        })
    processingStatus:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"workflowProfileId"
        })
    workflowProfileId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"workflowProfileName"
        })
    workflowProfileName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"workflowProfileType"
        })
    workflowProfileType:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"externalId"
        })
    externalId:string | null;
        

    @Column("money",{ 
        nullable:true,
        name:"retentionDiscountAmount"
        })
    retentionDiscountAmount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"promotionId"
        })
    promotionId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"retentionDiscountCount"
        })
    retentionDiscountCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"distinctExternalIdCount"
        })
    distinctExternalIdCount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"mainTableTag"
        })
    mainTableTag:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"tableId"
        })
    tableId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"tableName"
        })
    tableName:string | null;
        
}

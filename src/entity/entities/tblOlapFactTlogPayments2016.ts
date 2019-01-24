import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_olap_fact_tlogPayments2016",{schema:"dbo"})
@Index("ci_siteId_BusinessDate",["siteId","businessDate",])
@Index("csIx1",["siteId","businessDate",])
@Index("ix_tlogId",["tlogId",])
export class tblOlapFactTlogPayments2016 {

    @Column("nvarchar",{ 
        nullable:false,
        length:50,
        name:"id"
        })
    id:string;
        

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
        

    @Column("int",{ 
        nullable:true,
        name:"closedDateKey"
        })
    closedDateKey:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:10,
        name:"closedHourKey"
        })
    closedHourKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"orderType"
        })
    orderType:string | null;
        

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
        length:5,
        name:"allGeneral"
        })
    allGeneral:string | null;
        

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
        

    @Column("int",{ 
        nullable:true,
        name:"calculatePpa"
        })
    calculatePpa:number | null;
        

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
        length:50,
        name:"serviceKey"
        })
    serviceKey:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"groupSize"
        })
    groupSize:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"OLAP_PARTITION"
        })
    olapPartition:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tablenumber"
        })
    tablenumber:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"vatPercent"
        })
    vatPercent:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"dcTlogId"
        })
    dcTlogId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
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
        

    @Column("money",{ 
        nullable:true,
        name:"actualAmount"
        })
    actualAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"cashbackAmount"
        })
    cashbackAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"roundingAmount"
        })
    roundingAmount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"paymentType"
        })
    paymentType:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"accountId"
        })
    accountId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"clearingName"
        })
    clearingName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"userId"
        })
    userId:string | null;
        

    @Column("datetimeoffset",{ 
        nullable:true,
        name:"paidOn"
        })
    paidOn:Date | null;
        

    @Column("money",{ 
        nullable:true,
        name:"tipAmount"
        })
    tipAmount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"refundType"
        })
    refundType:string | null;
        

    @Column("money",{ 
        nullable:true,
        name:"refundTipAmount"
        })
    refundTipAmount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"refundtipAmountCount"
        })
    refundtipAmountCount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"paymentAmount"
        })
    paymentAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesCoverageAmount"
        })
    salesCoverageAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"refund"
        })
    refund:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"refundCount"
        })
    refundCount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"tipAdjusted"
        })
    tipAdjusted:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalTips"
        })
    totalTips:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"totalTipsCount"
        })
    totalTipsCount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"payOutPaymentAmount"
        })
    payOutPaymentAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"payInPaymentAmount"
        })
    payInPaymentAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"prepayLoadPaymentAmount"
        })
    prepayLoadPaymentAmount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"approveBy"
        })
    approveBy:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"accountIdKey"
        })
    accountIdKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"issuerName"
        })
    issuerName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"externalSource"
        })
    externalSource:string | null;
        

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
        length:50,
        name:"deliveryPersonId"
        })
    deliveryPersonId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"tableName"
        })
    tableName:string | null;
        
}

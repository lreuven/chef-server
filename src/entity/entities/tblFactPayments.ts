import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_factPayments",{schema:"dbo"})
export class tblFactPayments {

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
        

    @Column("int",{ 
        nullable:true,
        name:"businessDateKey"
        })
    businessDateKey:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"openDateKey"
        })
    openDateKey:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4,
        name:"openTimeKey"
        })
    openTimeKey:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"closedDateKey"
        })
    closedDateKey:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4,
        name:"closedTimeKey"
        })
    closedTimeKey:string | null;
        

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
        name:"lastPaymentTimeDateKey"
        })
    lastPaymentTimeDateKey:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4,
        name:"lastPaymentTimeKey"
        })
    lastPaymentTimeKey:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tablenumber"
        })
    tablenumber:number | null;
        

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
        name:"deliveryPersonId"
        })
    deliveryPersonId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"mainPhoneNumber"
        })
    mainPhoneNumber:string | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"locationLat"
        })
    locationLat:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"locationLng"
        })
    locationLng:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"ordererEmail"
        })
    ordererEmail:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"ordererRegionName"
        })
    ordererRegionName:string | null;
        

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
        name:"userId"
        })
    userId:string | null;
        

    @Column("datetimeoffset",{ 
        nullable:true,
        name:"paidOn"
        })
    paidOn:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"paidOnDateKey"
        })
    paidOnDateKey:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4,
        name:"paidOnTimeKey"
        })
    paidOnTimeKey:string | null;
        

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
        nullable:false,
        length:1,
        name:"refundType"
        })
    refundType:string;
        

    @Column("money",{ 
        nullable:true,
        name:"actualAmount"
        })
    actualAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"paymentAmountIncludeVat"
        })
    paymentAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"payInPaymentAmountIncludeVat"
        })
    payInPaymentAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"payOutPaymentAmountIncludeVat"
        })
    payOutPaymentAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"prepayLoadPaymentAmountIncludeVat"
        })
    prepayLoadPaymentAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesCoverageAmount"
        })
    salesCoverageAmount:number | null;
        

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
        

    @Column("money",{ 
        nullable:true,
        name:"tipAmount"
        })
    tipAmount:number | null;
        

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
        name:"totalTips"
        })
    totalTips:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"totalTipsCount"
        })
    totalTipsCount:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:9,
        name:"OLAP_PARTITION"
        })
    olapPartition:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"externalSource"
        })
    externalSource:string | null;
        
}

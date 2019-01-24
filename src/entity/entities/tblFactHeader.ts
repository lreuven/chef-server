import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_factHeader",{schema:"dbo"})
@Index("ix_businessDate",["businessDate",])
@Index("uci_tlogs",["tlogId",],{unique:true})
export class tblFactHeader {

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
        

    @Column("int",{ 
        nullable:true,
        name:"businessDateKey"
        })
    businessDateKey:number | null;
        

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
        name:"openDateKey"
        })
    openDateKey:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4,
        name:"openTimeKey"
        })
    openTimeKey:string | null;
        

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
        length:4,
        name:"closedTimeKey"
        })
    closedTimeKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"orderTypeOrgVal"
        })
    orderTypeOrgVal:string | null;
        

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
        

    @Column("datetimeoffset",{ 
        nullable:true,
        name:"lastPaymentTime"
        })
    lastPaymentTime:Date | null;
        

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
        

    @Column("datetime",{ 
        nullable:true,
        name:"tlogCreated"
        })
    tlogCreated:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"tableId"
        })
    tableId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tableseats"
        })
    tableseats:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tablenumber"
        })
    tablenumber:number | null;
        

    @Column("nvarchar",{ 
        nullable:false,
        length:25,
        name:"processingStatus"
        })
    processingStatus:string;
        

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
        

    @Column("datetime",{ 
        nullable:true,
        name:"statisticsProcessingStartTime"
        })
    statisticsProcessingStartTime:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"statisticsTlogCreated"
        })
    statisticsTlogCreated:Date | null;
        

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
        

    @Column("int",{ 
        nullable:true,
        name:"dinersOrgVal"
        })
    dinersOrgVal:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"diners"
        })
    diners:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"customers"
        })
    customers:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"orders"
        })
    orders:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"totalTime"
        })
    totalTime:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalAmount"
        })
    totalAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalPaymentAmount"
        })
    totalPaymentAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalIncludedTax"
        })
    totalIncludedTax:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"vatPercent"
        })
    vatPercent:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"excludedTaxAmount"
        })
    excludedTaxAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalSalesAmount"
        })
    totalSalesAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalTipAmount"
        })
    totalTipAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"declaredTipAmount"
        })
    declaredTipAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalBeforeTip"
        })
    totalBeforeTip:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalForTip"
        })
    totalForTip:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:5,
        name:"calculatePpa"
        })
    calculatePpa:string | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalReductionAmount"
        })
    totalReductionAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"vatAmount"
        })
    vatAmount:number | null;
        

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

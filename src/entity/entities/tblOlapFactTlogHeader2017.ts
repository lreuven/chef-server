import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_olap_fact_tlogHeader2017",{schema:"dbo"})
@Index("ci_siteId_BusinessDate",["siteId","businessDate",])
@Index("csIx1",["siteId","businessDate","opened","totalSalesAmount",])
@Index("ix_tlogId",["tlogId",],{unique:true})
export class tblOlapFactTlogHeader2017 {

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
        length:10,
        name:"lastPaymentTimeHourKey"
        })
    lastPaymentTimeHourKey:string | null;
        

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
        

    @Column("int",{ 
        nullable:true,
        name:"totalTime"
        })
    totalTime:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"diners"
        })
    diners:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"customerCount"
        })
    customerCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"orderCount"
        })
    orderCount:number | null;
        

    @Column("money",{ 
        nullable:true,
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
        

    @Column("money",{ 
        nullable:true,
        name:"totalIncludedTax"
        })
    totalIncludedTax:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalExcludedTax"
        })
    totalExcludedTax:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"exemptedExcludedTax"
        })
    exemptedExcludedTax:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"exemptedIncludedTax"
        })
    exemptedIncludedTax:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalExemptedTax"
        })
    totalExemptedTax:number | null;
        

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
        

    @Column("money",{ 
        nullable:true,
        name:"Taxs"
        })
    taxs:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"OLAP_PARTITION"
        })
    olapPartition:string | null;
        

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
        

    @Column("datetime",{ 
        nullable:true,
        name:"tlogCreated"
        })
    tlogCreated:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:10,
        name:"tlogCreatedKey"
        })
    tlogCreatedKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:10,
        name:"tlogCreatedHourKey"
        })
    tlogCreatedHourKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"processingStatus"
        })
    processingStatus:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"ClosedToProcessingStartTime"
        })
    closedToProcessingStartTime:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"ProcessingStartTimeToTlogCreated"
        })
    processingStartTimeToTlogCreated:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tlogProcessTime"
        })
    tlogProcessTime:number | null;
        

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
        name:"dcTlogId"
        })
    dcTlogId:string | null;
        

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
        length:50,
        name:"externalSource"
        })
    externalSource:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"calculatePpa"
        })
    calculatePpa:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"dinersNetAmount"
        })
    dinersNetAmount:number | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:38,
        scale:13,
        name:"dinersNetAmountExcludeVat"
        })
    dinersNetAmountExcludeVat:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"jsonCreatedApi"
        })
    jsonCreatedApi:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"mainTableTag"
        })
    mainTableTag:string | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalTipAmountForCalc"
        })
    totalTipAmountForCalc:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"tableName"
        })
    tableName:string | null;
        
}

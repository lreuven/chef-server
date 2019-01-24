import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_olap_fact_tlogHeaderMaxBrenner",{schema:"dbo"})
export class tblOlapFactTlogHeaderMaxBrenner {

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
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4000,
        name:"openedDateKey"
        })
    openedDateKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4000,
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
        length:4000,
        name:"closedDateKey"
        })
    closedDateKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4000,
        name:"closedHourKey"
        })
    closedHourKey:string | null;
        

    @Column("datetimeoffset",{ 
        nullable:true,
        name:"lastPaymentTime"
        })
    lastPaymentTime:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4000,
        name:"lastPaymentTimeDateKey"
        })
    lastPaymentTimeDateKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4000,
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
        length:61,
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
        nullable:false,
        name:"calculatePpa"
        })
    calculatePpa:number;
        

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
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"vatPercent"
        })
    vatPercent:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"excludedTaxAmount"
        })
    excludedTaxAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"totalAmount"
        })
    totalAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"totalPaymentAmount"
        })
    totalPaymentAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"totalSalesAmount"
        })
    totalSalesAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"totalTipAmount"
        })
    totalTipAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"declaredTipAmount"
        })
    declaredTipAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"totalBeforeTip"
        })
    totalBeforeTip:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"totalForTip"
        })
    totalForTip:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"totalIncludedTax"
        })
    totalIncludedTax:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"totalExcludedTax"
        })
    totalExcludedTax:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"exemptedExcludedTax"
        })
    exemptedExcludedTax:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"exemptedIncludedTax"
        })
    exemptedIncludedTax:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"totalExemptedTax"
        })
    totalExemptedTax:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"totalReductionAmount"
        })
    totalReductionAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"vatAmount"
        })
    vatAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:10,
        scale:2,
        name:"Taxs"
        })
    taxs:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
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
        length:4000,
        name:"tlogCreatedKey"
        })
    tlogCreatedKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4000,
        name:"tlogCreatedHourKey"
        })
    tlogCreatedHourKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:false,
        length:25,
        name:"processingStatus"
        })
    processingStatus:string;
        

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
        
}

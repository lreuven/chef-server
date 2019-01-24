import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_fact_tlogHeader",{schema:"dbo"})
export class tblFactTlogHeader {

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
        name:"orderNumber"
        })
    orderNumber:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"ownerId"
        })
    ownerId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"tableId"
        })
    tableId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tablenumber"
        })
    tablenumber:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:10,
        name:"zNumber"
        })
    zNumber:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"timeOffset"
        })
    timeOffset:number | null;
        

    @Column("datetime",{ 
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
        length:4,
        name:"openedHourKey"
        })
    openedHourKey:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"closed"
        })
    closed:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"closedDateKey"
        })
    closedDateKey:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"closedHourKey"
        })
    closedHourKey:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"lastPaymentTime"
        })
    lastPaymentTime:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"lastPaymentTimeDateKey"
        })
    lastPaymentTimeDateKey:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"lastPaymentTimeHourKey"
        })
    lastPaymentTimeHourKey:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"source"
        })
    source:string | null;
        

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
        length:50,
        name:"serviceKey"
        })
    serviceKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"orderType"
        })
    orderType:string | null;
        

    @Column("bit",{ 
        nullable:true,
        name:"calculatePpa"
        })
    calculatePpa:boolean | null;
        

    @Column("bit",{ 
        nullable:true,
        name:"loyalty"
        })
    loyalty:boolean | null;
        

    @Column("bit",{ 
        nullable:true,
        name:"isStaff"
        })
    isStaff:boolean | null;
        

    @Column("bit",{ 
        nullable:true,
        name:"allGeneral"
        })
    allGeneral:boolean | null;
        

    @Column("int",{ 
        nullable:true,
        name:"groupSize"
        })
    groupSize:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"totalTime"
        })
    totalTime:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"orgValDiners"
        })
    orgValDiners:number | null;
        

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
        precision:5,
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
        name:"totalBeforeTipAmount"
        })
    totalBeforeTipAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalForTipAmount"
        })
    totalForTipAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalIncludedTaxAmount"
        })
    totalIncludedTaxAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalExcludedTaxAmount"
        })
    totalExcludedTaxAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"exemptedExcludedTaxAmount"
        })
    exemptedExcludedTaxAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"exemptedIncludedTaxAmount"
        })
    exemptedIncludedTaxAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalExemptedTaxAmount"
        })
    totalExemptedTaxAmount:number | null;
        

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
        name:"taxsAmount"
        })
    taxsAmount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tableseats"
        })
    tableseats:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"dcTlogId"
        })
    dcTlogId:string | null;
        

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
        length:25,
        name:"OLAP_PARTITION"
        })
    olapPartition:string | null;
        
}

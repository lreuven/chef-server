import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("siteBusinessDateSummary",{schema:"dbo"})
@Index("ix_weekOfYear",["weekOfYear",])
@Index("ix_yearMonth",["yearMonth",])
@Index("nci_wi_siteBusinessDateSummary_758F14A87A3CC55CAD37F1FD816BAFE6",["ttlRevenuencludeVat","businessDate",])
@Index("uci_siteId_businessDate",["siteId","businessDate",],{unique:true})
export class siteBusinessDateSummary {

    @Column("nvarchar",{ 
        nullable:false,
        length:50,
        name:"siteId"
        })
    siteId:string;
        

    @Column("date",{ 
        nullable:false,
        name:"businessDate"
        })
    businessDate:Date;
        

    @Column("bit",{ 
        nullable:true,
        name:"isEOD"
        })
    isEod:boolean | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesAmountApi"
        })
    salesAmountApi:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"businessDateCalanderStatus"
        })
    businessDateCalanderStatus:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"orders"
        })
    orders:number | null;
        

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
        

    @Column("money",{ 
        nullable:true,
        name:"salesAmountIncludeVat"
        })
    salesAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesAmountExcludeVat"
        })
    salesAmountExcludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesVatAmount"
        })
    salesVatAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"refundAmountIncludeVat"
        })
    refundAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"refundAmountExcludeVat"
        })
    refundAmountExcludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"refundVatAmount"
        })
    refundVatAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"tipAmountIncludeVat"
        })
    tipAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"tipAmountExcludeVat"
        })
    tipAmountExcludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"tipVatAmount"
        })
    tipVatAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"employeesAmount"
        })
    employeesAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"wasteAmount"
        })
    wasteAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"voidsAmount"
        })
    voidsAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"mrAmount"
        })
    mrAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"operationalAmount"
        })
    operationalAmount:number | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"dailyJsonDataCompress"
        })
    dailyJsonDataCompress:Buffer | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        name:"dailyJsonDataDecompressed"
        })
    dailyJsonDataDecompressed:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"lastUpdatedDate"
        })
    lastUpdatedDate:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:30,
        name:"businessDateDOW"
        })
    businessDateDow:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"yearMonth"
        })
    yearMonth:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesDinersAmountIncludeVat"
        })
    salesDinersAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesAndRefoundAmountIncludeVat"
        })
    salesAndRefoundAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"mrPrc"
        })
    mrPrc:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"ppaIncludeVat"
        })
    ppaIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"wastePrc"
        })
    wastePrc:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"operationalPrc"
        })
    operationalPrc:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"lastTlogDate"
        })
    lastTlogDate:Date | null;
        

    @Column("money",{ 
        nullable:true,
        name:"AvgNweeksSalesAndRefoundAmountIncludeVat"
        })
    avgNweeksSalesAndRefoundAmountIncludeVat:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:15,
        scale:2,
        name:"prcAvgNweeksSalesAndRefoundAmountIncludeVat"
        })
    prcAvgNweeksSalesAndRefoundAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"voidsPrc"
        })
    voidsPrc:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"employeesPrc"
        })
    employeesPrc:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tlogsCountApi"
        })
    tlogsCountApi:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tlogsCount"
        })
    tlogsCount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"ttlRevenuencludeVat"
        })
    ttlRevenuencludeVat:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:15,
        scale:2,
        name:"avgNweeksMrPrc"
        })
    avgNweeksMrPrc:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:15,
        scale:2,
        name:"avgNweeksVoidsPrc"
        })
    avgNweeksVoidsPrc:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:15,
        scale:2,
        name:"avgNweeksEmployeesPrc"
        })
    avgNweeksEmployeesPrc:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:15,
        scale:2,
        name:"avgNweeksOperationalPrc"
        })
    avgNweeksOperationalPrc:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:15,
        scale:2,
        name:"avgNweeksWastePrc"
        })
    avgNweeksWastePrc:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:7,
        name:"monthName"
        })
    monthName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"calendarEvent"
        })
    calendarEvent:string | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesDinersAmountExcludeVat"
        })
    salesDinersAmountExcludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"dailyHeaderTotals"
        })
    dailyHeaderTotals:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"dailyHeaderTlogs"
        })
    dailyHeaderTlogs:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"dailySalesTotals"
        })
    dailySalesTotals:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"jsonBalanceAmount"
        })
    jsonBalanceAmount:number | null;
        

    @Column("int",{ 
        nullable:false,
        name:"isBalance"
        })
    isBalance:number;
        

    @Column("int",{ 
        nullable:true,
        name:"mailConfId"
        })
    mailConfId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"weekOfYear"
        })
    weekOfYear:number | null;
        
}

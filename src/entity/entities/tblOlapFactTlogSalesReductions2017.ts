import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_olap_fact_tlogSalesReductions2017",{schema:"dbo"})
@Index("ci_siteId_BusinessDate",["siteId","businessDate",])
@Index("csIx1",["siteId","businessDate","itemId",])
@Index("ix_tlogId",["tlogId",])
export class tblOlapFactTlogSalesReductions2017 {

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
        length:61,
        name:"serviceKey"
        })
    serviceKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"OLAP_PARTITION"
        })
    olapPartition:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"itemId"
        })
    itemId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"offerId"
        })
    offerId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"type"
        })
    type:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"menuSectionId"
        })
    menuSectionId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"isModifier"
        })
    isModifier:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"chairNumber"
        })
    chairNumber:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"groupSize"
        })
    groupSize:number | null;
        

    @Column("datetimeoffset",{ 
        nullable:true,
        name:"firedOn"
        })
    firedOn:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"firedOnDateKey"
        })
    firedOnDateKey:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:10,
        name:"firedOnHourKey"
        })
    firedOnHourKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"firedBy"
        })
    firedBy:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:13,
        name:"operatorAmount"
        })
    operatorAmount:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tablenumber"
        })
    tablenumber:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"vatPercent"
        })
    vatPercent:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"clubCardNumber"
        })
    clubCardNumber:string | null;
        

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
        name:"rewardId"
        })
    rewardId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"promotionId"
        })
    promotionId:string | null;
        

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
        name:"reasonSubType"
        })
    reasonSubType:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"reasonSubTypeHebrew"
        })
    reasonSubTypeHebrew:string | null;
        

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
        name:"approvedBy"
        })
    approvedBy:string | null;
        

    @Column("datetimeoffset",{ 
        nullable:true,
        name:"approvedOn"
        })
    approvedOn:Date | null;
        

    @Column("money",{ 
        nullable:true,
        name:"operationalDiscountAmount"
        })
    operationalDiscountAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"operationalDiscountAmountBforeVat"
        })
    operationalDiscountAmountBforeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"organizationalDiscountAmount"
        })
    organizationalDiscountAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"organizationalDiscountAmountBeforeVat"
        })
    organizationalDiscountAmountBeforeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"retentionDiscountAmount"
        })
    retentionDiscountAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"retentionDiscountAmountBeforeVat"
        })
    retentionDiscountAmountBeforeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"cancellationAmount"
        })
    cancellationAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"cancellationAmountBeforeVat"
        })
    cancellationAmountBeforeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"otherDiscountAmount"
        })
    otherDiscountAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"otherDiscountAmountBeforeVat"
        })
    otherDiscountAmountBeforeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"ReturnAmount"
        })
    returnAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"ReturnAmountBeforeVat"
        })
    returnAmountBeforeVat:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"externalId"
        })
    externalId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"externalIdCount"
        })
    externalIdCount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"wasteAmount"
        })
    wasteAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"wasteAmountBeforeVat"
        })
    wasteAmountBeforeVat:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"reducedBy"
        })
    reducedBy:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"reducedAt"
        })
    reducedAt:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:101,
        name:"reasonSubTypeKey"
        })
    reasonSubTypeKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:152,
        name:"reasonIdKey"
        })
    reasonIdKey:string | null;
        

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

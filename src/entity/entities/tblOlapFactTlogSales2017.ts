import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_olap_fact_tlogSales2017",{schema:"dbo"})
@Index("ci_siteId_BusinessDate",["siteId","businessDate",])
@Index("csIx1",["siteId","businessDate","itemId",])
@Index("ix_tlogId",["tlogId",])
export class tblOlapFactTlogSales2017 {

    @Column("nvarchar",{ 
        nullable:false,
        length:50,
        name:"id"
        })
    id:string;
        

    @Column("nvarchar",{ 
        nullable:false,
        length:50,
        name:"itemId"
        })
    itemId:string;
        

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
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"orderedItemId"
        })
    orderedItemId:string | null;
        

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
        

    @Column("nvarchar",{ 
        nullable:true,
        length:8,
        name:"openedDateKey"
        })
    openedDateKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4,
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
        length:8,
        name:"closedDateKey"
        })
    closedDateKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4,
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
        

    @Column("int",{ 
        nullable:true,
        name:"groupSize"
        })
    groupSize:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"OLAP_PARTITION"
        })
    olapPartition:string | null;
        

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
        name:"dcTlogId"
        })
    dcTlogId:string | null;
        

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
        name:"type"
        })
    type:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"offerId"
        })
    offerId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"itemName"
        })
    itemName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"offerName"
        })
    offerName:string | null;
        

    @Column("datetimeoffset",{ 
        nullable:true,
        name:"firedOn"
        })
    firedOn:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:8,
        name:"firedOnDateKey"
        })
    firedOnDateKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4,
        name:"firedOnHourKey"
        })
    firedOnHourKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"firedBy"
        })
    firedBy:string | null;
        

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
        name:"prepared"
        })
    prepared:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"return"
        })
    return:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"cancelled"
        })
    cancelled:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"sold"
        })
    sold:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:10,
        scale:2,
        name:"grossAmount"
        })
    grossAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"netAmount"
        })
    netAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"defaultPrice"
        })
    defaultPrice:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"tipAmount"
        })
    tipAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"orderTipAmount"
        })
    orderTipAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"tipDeclarationAmount"
        })
    tipDeclarationAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"refundAmount"
        })
    refundAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"generalAmount"
        })
    generalAmount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"menuSectionId"
        })
    menuSectionId:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"netAmountVat"
        })
    netAmountVat:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"returnAmount"
        })
    returnAmount:number | null;
        

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
        name:"priceReduction"
        })
    priceReduction:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"serviceCharge"
        })
    serviceCharge:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"serviceChargeCount"
        })
    serviceChargeCount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"clubCardNumber"
        })
    clubCardNumber:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"unitOfMeasure"
        })
    unitOfMeasure:string | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"kgUnits"
        })
    kgUnits:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"litterUnits"
        })
    litterUnits:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:10,
        scale:2,
        name:"netAmountWithOutVat"
        })
    netAmountWithOutVat:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:10,
        scale:2,
        name:"tipAmountWithOutVat"
        })
    tipAmountWithOutVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesNetAmountWithOutVat"
        })
    salesNetAmountWithOutVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesTipAmountWithOutVat"
        })
    salesTipAmountWithOutVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesNetAmountVat"
        })
    salesNetAmountVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"grossSalesAmount"
        })
    grossSalesAmount:number | null;
        

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
        name:"vatAmount"
        })
    vatAmount:number | null;
        

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
        name:"salesVatAmount"
        })
    salesVatAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"tipVatAmount"
        })
    tipVatAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"refundVatAmount"
        })
    refundVatAmount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:1,
        name:"isNegativeValue"
        })
    isNegativeValue:string | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"grUnits"
        })
    grUnits:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"mlLitterUnits"
        })
    mlLitterUnits:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"approveBy"
        })
    approveBy:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"modifierSold"
        })
    modifierSold:number | null;
        

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

import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_factReduction",{schema:"dbo"})
export class tblFactReduction {

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
        name:"itemId"
        })
    itemId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"offerId"
        })
    offerId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"firedOnDateKey"
        })
    firedOnDateKey:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4,
        name:"firedOnTimeKey"
        })
    firedOnTimeKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"firedBy"
        })
    firedBy:string | null;
        

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
        

    @Column("int",{ 
        nullable:true,
        name:"reducedAtDateKey"
        })
    reducedAtDateKey:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4,
        name:"reducedAtTimeKey"
        })
    reducedAtTimeKey:string | null;
        

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
        name:"reasonTypeKey"
        })
    reasonTypeKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"reasonTypeName"
        })
    reasonTypeName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"reasonSubType"
        })
    reasonSubType:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:101,
        name:"reasonSubTypeKey"
        })
    reasonSubTypeKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"reasonSubTypeName"
        })
    reasonSubTypeName:string | null;
        

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
        length:152,
        name:"promotionReasonKey"
        })
    promotionReasonKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"promotionReasonName"
        })
    promotionReasonName:string | null;
        

    @Column("money",{ 
        nullable:true,
        name:"operationalDiscountAmountIncludeVat"
        })
    operationalDiscountAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"wasteAmountIncludeVat"
        })
    wasteAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"organizationalDiscountAmountIncludeVat"
        })
    organizationalDiscountAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"promotionsDiscountAmountIncludeVat"
        })
    promotionsDiscountAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"retentionDiscountAmountIncludeVat"
        })
    retentionDiscountAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"cancellationAmountIncludeVat"
        })
    cancellationAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"otherDiscountAmountIncludeVat"
        })
    otherDiscountAmountIncludeVat:number | null;
        

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

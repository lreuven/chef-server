import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_factSales",{schema:"dbo"})
export class tblFactSales {

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
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"clubCardNumber"
        })
    clubCardNumber:string | null;
        

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
        precision:9,
        scale:2,
        name:"grossSalesAmount"
        })
    grossSalesAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"salesAmountIncludeVat"
        })
    salesAmountIncludeVat:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"salesAmountExcludeVat"
        })
    salesAmountExcludeVat:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"vatAmount"
        })
    vatAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"tipAmountIncludeVat"
        })
    tipAmountIncludeVat:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"tipAmountExcludeVat"
        })
    tipAmountExcludeVat:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"refundAmountIncludeVat"
        })
    refundAmountIncludeVat:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"refundAmountExcludeVat"
        })
    refundAmountExcludeVat:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"defaultPrice"
        })
    defaultPrice:number | null;
        

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

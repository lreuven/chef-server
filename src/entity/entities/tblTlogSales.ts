import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_tlogSales",{schema:"dbo"})
@Index("uci_tlogId_id",["tlogId","id",],{unique:true})
export class tblTlogSales {

    @Column("timestamp",{ 
        nullable:false,
        name:"TS"
        })
    ts:Date;
        

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
        name:"itemId"
        })
    itemId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"originalItemId"
        })
    originalItemId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"offerId"
        })
    offerId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"orderedItemId"
        })
    orderedItemId:string | null;
        

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
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"type"
        })
    type:string | null;
        

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
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"clubCardNumber"
        })
    clubCardNumber:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"unitOfMeasure"
        })
    unitOfMeasure:string | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"units"
        })
    units:number | null;
        
}

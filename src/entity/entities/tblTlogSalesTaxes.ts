import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_tlogSalesTaxes",{schema:"dbo"})
export class tblTlogSalesTaxes {

    @Column("timestamp",{ 
        nullable:false,
        name:"TS"
        })
    ts:Date;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"saleId"
        })
    saleId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"tlogId"
        })
    tlogId:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"taxableAmount"
        })
    taxableAmount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"rateId"
        })
    rateId:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"rate"
        })
    rate:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"inclusive"
        })
    inclusive:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"amount"
        })
    amount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"rateName"
        })
    rateName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:10,
        name:"exempted"
        })
    exempted:string | null;
        
}

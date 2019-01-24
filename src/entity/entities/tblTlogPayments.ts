import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_tlogPayments",{schema:"dbo"})
export class tblTlogPayments {

    @Column("timestamp",{ 
        nullable:false,
        name:"TS"
        })
    ts:Date;
        

    @Column("nvarchar",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"id"
        })
    id:string;
        

    @Column("nvarchar",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"tlogId"
        })
    tlogId:string;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"actualAmount"
        })
    actualAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"cashbackAmount"
        })
    cashbackAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"roundingAmount"
        })
    roundingAmount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"paymentType"
        })
    paymentType:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"accountId"
        })
    accountId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"userId"
        })
    userId:string | null;
        

    @Column("datetimeoffset",{ 
        nullable:true,
        name:"paidOn"
        })
    paidOn:Date | null;
        

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
        name:"paymentAmount"
        })
    paymentAmount:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"salesCoverageAmount"
        })
    salesCoverageAmount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"clearingName"
        })
    clearingName:string | null;
        
}

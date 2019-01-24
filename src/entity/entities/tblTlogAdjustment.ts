import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_tlogAdjustment",{schema:"dbo"})
export class tblTlogAdjustment {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"id"
        })
    id:string | null;
        

    @Column("nvarchar",{ 
        nullable:false,
        length:255,
        name:"tlogId"
        })
    tlogId:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"adjustedTlogId"
        })
    adjustedTlogId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"businessDate"
        })
    businessDate:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:9,
        scale:2,
        name:"tipAmount"
        })
    tipAmount:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"adjustedPaymentId"
        })
    adjustedPaymentId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"OLAP_PARTITION"
        })
    olapPartition:string | null;
        
}

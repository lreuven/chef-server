import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_RedimCode",{schema:"dbo"})
@Index("ix_tlogId",["tlogId",])
export class tblRedimCode {

    @Column("nvarchar",{ 
        nullable:false,
        length:50,
        name:"tlogId"
        })
    tlogId:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"promotionId"
        })
    promotionId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"externalId"
        })
    externalId:string | null;
        

    @Column("money",{ 
        nullable:true,
        name:"retentionDiscountAmount"
        })
    retentionDiscountAmount:number | null;
        
}

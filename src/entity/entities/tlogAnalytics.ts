import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("TlogAnalytics",{schema:"dbo"})
@Index("ix_BusinessDate",["businessDate",])
@Index("ix_processType",["processType",])
@Index("ix_SiteId",["siteId",])
export class tlogAnalytics {

    @Column("nvarchar",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"TlogId"
        })
    tlogId:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"Type"
        })
    type:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"SiteId"
        })
    siteId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"BusinessDate"
        })
    businessDate:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        name:"Data"
        })
    data:string | null;
        

    @Column("timestamp",{ 
        nullable:false,
        name:"TS"
        })
    ts:Date;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"processType"
        })
    processType:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"created"
        })
    created:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"tmpTlogId"
        })
    tmpTlogId:string | null;
        
}

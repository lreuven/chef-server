import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_mongoAnalyticsTotals",{schema:"dbo"})
@Index("ci_siteId_businessDate",["siteId","businessDate",],{unique:true})
export class tblMongoAnalyticsTotals {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"businessDate"
        })
    businessDate:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tlogCount"
        })
    tlogCount:number | null;
        
}

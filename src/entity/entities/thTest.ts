import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("TH_test",{schema:"dbo"})
@Index("uci",["tlogId",],{unique:true})
export class thTest {

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"tlogId"
        })
    tlogId:string | null;
        

    @Column("varchar",{ 
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
        name:"OLAP_PARTITION"
        })
    olapPartition:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        name:"jsonData"
        })
    jsonData:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"processStatus"
        })
    processStatus:string | null;
        
}

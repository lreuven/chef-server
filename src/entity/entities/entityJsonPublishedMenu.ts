import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("EntityJsonPublishedMenu",{schema:"dbo"})
export class entityJsonPublishedMenu {

    @Column("nvarchar",{ 
        nullable:true,
        length:100,
        name:"EntityType"
        })
    entityType:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        name:"JSONDATA"
        })
    jsondata:string | null;
        

    @Column("timestamp",{ 
        nullable:false,
        name:"TS"
        })
    ts:Date;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("bit",{ 
        nullable:true,
        name:"isChange"
        })
    isChange:boolean | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"changeDate"
        })
    changeDate:Date | null;
        
}

import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("EntityJSON",{schema:"dbo"})
@Index("ix_siteid",["siteId",])
export class entityJson {

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
        
}

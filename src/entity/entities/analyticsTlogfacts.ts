import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("analytics_tlogfacts",{schema:"dbo"})
export class analyticsTlogfacts {

    @Column("nvarchar",{ 
        nullable:true,
        name:"RAW_DOCUMENT"
        })
    rawDocument:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"processType"
        })
    processType:string | null;
        
}

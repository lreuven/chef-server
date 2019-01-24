import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("הרצליה$",{schema:"dbo"})
export class הרצליה {

    @Column("datetime",{ 
        nullable:true,
        name:"businessDate"
        })
    businessDate:Date | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"seated"
        })
    seated:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"otc"
        })
    otc:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"siteId"
        })
    siteId:string | null;
        
}

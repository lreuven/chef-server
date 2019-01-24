import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("שרונה$",{schema:"dbo"})
export class שרונה {

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
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"otc2"
        })
    otc2:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"F6"
        })
    f6:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"F7"
        })
    f7:string | null;
        
}

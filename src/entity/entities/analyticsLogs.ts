import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("AnalyticsLogs",{schema:"dbo"})
export class analyticsLogs {

    @Column("nvarchar",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"Id"
        })
    id:string;
        

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
        

    @Column("datetime2",{ 
        nullable:true,
        name:"Created"
        })
    created:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        name:"Data"
        })
    data:string | null;
        
}

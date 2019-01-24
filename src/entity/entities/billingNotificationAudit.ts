import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("BillingNotificationAudit",{schema:"dbo"})
export class billingNotificationAudit {

    @Column("nvarchar",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"id"
        })
    id:string;
        

    @Column("datetime",{ 
        nullable:true,
        name:"created"
        })
    created:Date | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"serviceName"
        })
    serviceName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"sentTo"
        })
    sentTo:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"message"
        })
    message:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"topic"
        })
    topic:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdDate"
        })
    createdDate:Date | null;
        
}

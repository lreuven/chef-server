import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimOffers",{schema:"dbo"})
export class tblDimOffers {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"offerId"
        })
    offerId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"offerName"
        })
    offerName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"ROLE_siteId"
        })
    roleSiteId:string | null;
        
}

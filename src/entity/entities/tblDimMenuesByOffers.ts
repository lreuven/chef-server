import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimMenuesByOffers",{schema:"dbo"})
export class tblDimMenuesByOffers {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"menuId"
        })
    menuId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"menuName"
        })
    menuName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"sectionId"
        })
    sectionId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"sectionName"
        })
    sectionName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"sectionOfferId"
        })
    sectionOfferId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"sectionOfferName"
        })
    sectionOfferName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:100,
        name:"siteId"
        })
    siteId:string | null;
        
}

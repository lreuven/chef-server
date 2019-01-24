import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimPromotions",{schema:"dbo"})
export class tblDimPromotions {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"promotionId"
        })
    promotionId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"promotionName"
        })
    promotionName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"Role_siteId"
        })
    roleSiteId:string | null;
        
}

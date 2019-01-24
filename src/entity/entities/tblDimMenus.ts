import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimMenus",{schema:"dbo"})
export class tblDimMenus {

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
        name:"ROLE_siteid"
        })
    roleSiteid:string | null;
        
}

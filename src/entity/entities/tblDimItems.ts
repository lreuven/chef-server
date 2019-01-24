import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimItems",{schema:"dbo"})
@Index("uci_siteId_itemId",["siteId","itemId",],{unique:true})
export class tblDimItems {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"itemId"
        })
    itemId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"itemName"
        })
    itemName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:25,
        name:"ItemCode"
        })
    itemCode:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"categoryId"
        })
    categoryId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"unitOfMeasure"
        })
    unitOfMeasure:string | null;
        

    @Column("float",{ 
        nullable:true,
        precision:53,
        name:"units"
        })
    units:number | null;
        
}

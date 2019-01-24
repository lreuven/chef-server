import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimOrderType",{schema:"dbo"})
export class tblDimOrderType {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"orderTypeKey"
        })
    orderTypeKey:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"orderTypeName"
        })
    orderTypeName:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"orderBySort"
        })
    orderBySort:number | null;
        
}

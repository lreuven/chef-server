import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_systemParameters",{schema:"dbo"})
export class tblSystemParameters {

    @Column("nvarchar",{ 
        nullable:true,
        length:100,
        name:"id"
        })
    id:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"description"
        })
    description:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"type"
        })
    type:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"value"
        })
    value:string | null;
        
}

import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_tlogTables",{schema:"dbo"})
export class tblTlogTables {

    @Column("timestamp",{ 
        nullable:false,
        name:"TS"
        })
    ts:Date;
        

    @Column("nvarchar",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"tlogId"
        })
    tlogId:string;
        

    @Column("nvarchar",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"tableId"
        })
    tableId:string;
        

    @Column("int",{ 
        nullable:true,
        name:"seats"
        })
    seats:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"number"
        })
    number:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"tags"
        })
    tags:string | null;
        
}

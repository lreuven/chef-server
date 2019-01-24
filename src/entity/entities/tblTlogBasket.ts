import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_tlogBasket",{schema:"dbo"})
export class tblTlogBasket {

    @Column("uniqueidentifier",{ 
        nullable:true,
        name:"batchId"
        })
    batchId:string | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"jsonCompress"
        })
    jsonCompress:Buffer | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        name:"jsonData"
        })
    jsonData:string | null;
        
}

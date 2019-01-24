import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_tlogBasketX",{schema:"dbo"})
export class tblTlogBasketX {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"batchId"
        })
    batchId:number;
        

    @Column("nvarchar",{ 
        nullable:true,
        name:"jsonData"
        })
    jsonData:string | null;
        
}

import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tblTest",{schema:"dbo"})
export class tblTest {

    @Column("nvarchar",{ 
        nullable:true,
        name:"jsonData"
        })
    jsonData:string | null;
        
}

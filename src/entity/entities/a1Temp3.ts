import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("a1_TEMP3",{schema:"dbo"})
export class a1Temp3 {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"businessDate"
        })
    businessDate:Date | null;
        
}

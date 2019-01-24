import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimOrdererRegionName",{schema:"dbo"})
export class tblDimOrdererRegionName {

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"ordererRegionName"
        })
    ordererRegionName:string | null;
        
}

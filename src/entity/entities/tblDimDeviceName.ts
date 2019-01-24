import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimDeviceName",{schema:"dbo"})
export class tblDimDeviceName {

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"deviceName"
        })
    deviceName:string | null;
        
}

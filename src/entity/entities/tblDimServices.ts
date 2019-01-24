import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimServices",{schema:"dbo"})
@Index("uci_serviceKey_siteId",["serviceKey","roleSiteId",],{unique:true})
export class tblDimServices {

    @Column("int",{ 
        nullable:true,
        name:"serviceKey"
        })
    serviceKey:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"serviceName"
        })
    serviceName:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"serviceTime"
        })
    serviceTime:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"RoleSiteId"
        })
    roleSiteId:string | null;
        
}

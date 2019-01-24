import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_tabitChefSalesByCategory",{schema:"dbo"})
export class tblTabitChefSalesByCategory {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"businessDate"
        })
    businessDate:number | null;
        

    @Column("nvarchar",{ 
        nullable:false,
        length:255,
        name:"departmentName"
        })
    departmentName:string;
        

    @Column("nvarchar",{ 
        nullable:false,
        length:255,
        name:"subDepartmenName"
        })
    subDepartmenName:string;
        

    @Column("money",{ 
        nullable:true,
        name:"ttlSalesRefundAmountIncludeVat"
        })
    ttlSalesRefundAmountIncludeVat:number | null;
        
}

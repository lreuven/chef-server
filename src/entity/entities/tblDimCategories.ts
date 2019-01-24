import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimCategories",{schema:"dbo"})
export class tblDimCategories {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"departmentId"
        })
    departmentId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"departmentName"
        })
    departmentName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"subDepartmentId"
        })
    subDepartmentId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"subDepartmenName"
        })
    subDepartmenName:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"categoryId"
        })
    categoryId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"categoryName"
        })
    categoryName:string | null;
        
}

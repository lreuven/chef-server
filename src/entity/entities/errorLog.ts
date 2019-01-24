import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("errorLog",{schema:"dbo"})
export class errorLog {

    @Column("timestamp",{ 
        nullable:false,
        name:"TS"
        })
    ts:Date;
        

    @Column("int",{ 
        nullable:true,
        name:"ErrorNumber"
        })
    errorNumber:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"ErrorSeverity"
        })
    errorSeverity:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"ErrorState"
        })
    errorState:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4000,
        name:"ErrorProcedure"
        })
    errorProcedure:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"ErrorLine"
        })
    errorLine:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:4000,
        name:"ErrorMessage"
        })
    errorMessage:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"date"
        })
    date:Date | null;
        
}

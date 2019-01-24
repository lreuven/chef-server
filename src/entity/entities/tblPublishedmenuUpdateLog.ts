import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_publishedmenuUpdateLog",{schema:"dbo"})
@Index("uci_siteId",["siteId",],{unique:true})
export class tblPublishedmenuUpdateLog {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"date1"
        })
    date1:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"date2"
        })
    date2:Date | null;
        

    @Column("int",{ 
        nullable:false,
        name:"isUpdate"
        })
    isUpdate:number;
        

    @Column("bit",{ 
        nullable:true,
        name:"isLoadData"
        })
    isLoadData:boolean | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"updateDate"
        })
    updateDate:Date | null;
        
}

import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_siteBusinessDateTabitChef",{schema:"dbo"})
@Index("uci_siteId_businessDate",["siteId","businessDate",],{unique:true})
export class tblSiteBusinessDateTabitChef {

    @Column("nvarchar",{ 
        nullable:true,
        length:50,
        name:"siteId"
        })
    siteId:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255,
        name:"siteName"
        })
    siteName:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"businessDate"
        })
    businessDate:Date | null;
        

    @Column("bit",{ 
        nullable:true,
        name:"isEod"
        })
    isEod:boolean | null;
        

    @Column("money",{ 
        nullable:true,
        name:"totalPaymentsMongo"
        })
    totalPaymentsMongo:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"diners"
        })
    diners:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"avgDinersSalesAmount"
        })
    avgDinersSalesAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesAmountIncludeVat"
        })
    salesAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"salesAmountExcludeVat"
        })
    salesAmountExcludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"vatAmount"
        })
    vatAmount:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"avgSalesAmountIncludeVatNweeks"
        })
    avgSalesAmountIncludeVatNweeks:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"viodAmountIncludeVat"
        })
    viodAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"viodAmountExcludeVat"
        })
    viodAmountExcludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"operationalAmountIncludeVat"
        })
    operationalAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"operationalAmountExcludeVat"
        })
    operationalAmountExcludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"retentionAmountIncludeVat"
        })
    retentionAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"retentionAmountExcludeVat"
        })
    retentionAmountExcludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"employeesAmountIncludeVat"
        })
    employeesAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"employeesAmountExcludeVat"
        })
    employeesAmountExcludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"wasteAmountIncludeVat"
        })
    wasteAmountIncludeVat:number | null;
        

    @Column("money",{ 
        nullable:true,
        name:"wasteAmountExcludeVat"
        })
    wasteAmountExcludeVat:number | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"jsonDataSalesByHourCompress"
        })
    jsonDataSalesByHourCompress:Buffer | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"jsonDataByServicesByOrderTypeCompress"
        })
    jsonDataByServicesByOrderTypeCompress:Buffer | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"jsonDataByCategoriesCompress"
        })
    jsonDataByCategoriesCompress:Buffer | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"jsonDataByPaymetsCompress"
        })
    jsonDataByPaymetsCompress:Buffer | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"jsonDataByTopNItemsByServicesCompress"
        })
    jsonDataByTopNItemsByServicesCompress:Buffer | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"jsonDataBybottomNItemsByServicesCompress"
        })
    jsonDataBybottomNItemsByServicesCompress:Buffer | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"jsonDataByOperationalDetailsCompress"
        })
    jsonDataByOperationalDetailsCompress:Buffer | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"jsonDataByRetentionDetailsCompress"
        })
    jsonDataByRetentionDetailsCompress:Buffer | null;
        

    @Column("varbinary",{ 
        nullable:true,
        name:"jsonDataByMonthlyCompress"
        })
    jsonDataByMonthlyCompress:Buffer | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"lastUpdated"
        })
    lastUpdated:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"changeDate"
        })
    changeDate:Date | null;
        
}

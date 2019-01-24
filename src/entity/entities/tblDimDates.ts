import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tbl_dimDates",{schema:"dbo"})
export class tblDimDates {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"DateKey"
        })
    dateKey:number;
        

    @Column("date",{ 
        nullable:false,
        name:"Date"
        })
    date:Date;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"Day"
        })
    day:number;
        

    @Column("char",{ 
        nullable:false,
        length:2,
        name:"DaySuffix"
        })
    daySuffix:string;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"Weekday"
        })
    weekday:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:10,
        name:"WeekDayName"
        })
    weekDayName:string;
        

    @Column("bit",{ 
        nullable:false,
        name:"IsWeekend"
        })
    isWeekend:boolean;
        

    @Column("bit",{ 
        nullable:false,
        name:"IsHoliday"
        })
    isHoliday:boolean;
        

    @Column("varchar",{ 
        nullable:true,
        length:64,
        name:"HolidayText"
        })
    holidayText:string | null;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"DOWInMonth"
        })
    dowInMonth:number;
        

    @Column("smallint",{ 
        nullable:false,
        name:"DayOfYear"
        })
    dayOfYear:number;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"WeekOfMonth"
        })
    weekOfMonth:number;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"WeekOfYear"
        })
    weekOfYear:number;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"ISOWeekOfYear"
        })
    isoWeekOfYear:number;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"Month"
        })
    month:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:10,
        name:"MonthName"
        })
    monthName:string;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"Quarter"
        })
    quarter:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:6,
        name:"QuarterName"
        })
    quarterName:string;
        

    @Column("int",{ 
        nullable:false,
        name:"Year"
        })
    year:number;
        

    @Column("char",{ 
        nullable:false,
        length:6,
        name:"MMYYYY"
        })
    mmyyyy:string;
        

    @Column("char",{ 
        nullable:false,
        length:7,
        name:"MonthYear"
        })
    monthYear:string;
        

    @Column("date",{ 
        nullable:false,
        name:"FirstDayOfMonth"
        })
    firstDayOfMonth:Date;
        

    @Column("date",{ 
        nullable:false,
        name:"LastDayOfMonth"
        })
    lastDayOfMonth:Date;
        

    @Column("date",{ 
        nullable:false,
        name:"FirstDayOfQuarter"
        })
    firstDayOfQuarter:Date;
        

    @Column("date",{ 
        nullable:false,
        name:"LastDayOfQuarter"
        })
    lastDayOfQuarter:Date;
        

    @Column("date",{ 
        nullable:false,
        name:"FirstDayOfYear"
        })
    firstDayOfYear:Date;
        

    @Column("date",{ 
        nullable:false,
        name:"LastDayOfYear"
        })
    lastDayOfYear:Date;
        

    @Column("date",{ 
        nullable:false,
        name:"FirstDayOfNextMonth"
        })
    firstDayOfNextMonth:Date;
        

    @Column("date",{ 
        nullable:false,
        name:"FirstDayOfNextYear"
        })
    firstDayOfNextYear:Date;
        
}

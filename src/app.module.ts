import { HttpModule, Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevController } from './lib/dev/dev.controller';
import { DevModule } from './lib/dev/dev.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './lib/users/users.controller';
import { UsersModule } from './lib/users/users.module';
import { AuthModule } from './lib/auth/auth.module';
import { RosService } from './services/ros/ros.service';
import { ConfigModule } from './config/config.module';
import {ConfigService} from './config/config.service';
import { ReportsModule } from './lib/reports/reports.module';
const configService = (new ConfigService(process.env.NODE_ENV));
@Module({
  imports: [
    DevModule,
    TypeOrmModule.forRoot({
      name: 'dwh',
      type: 'mssql',
      host: configService.databaseHost,
      port: 1433,
      username: configService.databaseUser,
      password: configService.databasePassword,
      database: configService.databaseName,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      options: {
        readOnlyIntent: true,
        encrypt: true,
      },
      logging: true,
      connectionTimeout: 30000,
      requestTimeout: 30000
    }),
    AuthModule,
    UsersModule,
    HttpModule,
    ConfigModule,
    ReportsModule,
  ],
  controllers: [AppController, DevController, UsersController],
  providers: [AppService, RosService, Logger],
})
export class AppModule{}

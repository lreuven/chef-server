"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const dev_controller_1 = require("./lib/dev/dev.controller");
const dev_module_1 = require("./lib/dev/dev.module");
const typeorm_1 = require("@nestjs/typeorm");
const users_controller_1 = require("./lib/users/users.controller");
const users_module_1 = require("./lib/users/users.module");
const auth_module_1 = require("./lib/auth/auth.module");
const ros_service_1 = require("./services/ros/ros.service");
const config_module_1 = require("./config/config.module");
const config_service_1 = require("./config/config.service");
const report_module_1 = require("./lib/report/report.module");
const configService = (new config_service_1.ConfigService(process.env.NODE_ENV));
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            dev_module_1.DevModule,
            typeorm_1.TypeOrmModule.forRoot({
                name: 'dwh',
                type: 'mssql',
                host: 'wallettabit.database.windows.net',
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
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            common_1.HttpModule,
            config_module_1.ConfigModule,
            report_module_1.ReportModule,
        ],
        controllers: [app_controller_1.AppController, dev_controller_1.DevController, users_controller_1.UsersController],
        providers: [app_service_1.AppService, ros_service_1.RosService, common_1.Logger],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
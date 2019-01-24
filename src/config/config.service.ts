import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import * as fs from 'fs';

export interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    if (!filePath || filePath === 'undefined') {
      filePath = 'local';
    }
    const config = dotenv.parse(fs.readFileSync('environments/' + filePath + '.env'));
    this.envConfig = this.validateInput(config);
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'local'])
        .default('local'),
      PORT: Joi.number().default(3000),
      DATABASE_USER: Joi.string().required(),
      DATABASE_PASSWORD: Joi.string().required(),
      DATABASE_NAME: Joi.string().required(),
      ROS_URL: Joi.string().required(),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  get databaseName(): string {
    return this.envConfig.DATABASE_NAME;
  }

  get databaseUser(): string {
    return this.envConfig.DATABASE_USER;
  }

  get databasePassword(): string {
    return this.envConfig.DATABASE_PASSWORD;
  }

  get rosUrl(): string {
    return this.envConfig.ROS_URL;
  }
}
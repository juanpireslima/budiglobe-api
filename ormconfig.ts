import 'dotenv/config';
import { join } from "path";
import { DataSource } from "typeorm";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const baseConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [join(__dirname, 'src/**/*.entity{.ts,.js}')],
  synchronize: false,
  migrationsTableName: 'typeorm_migrations',
  migrations: [join(__dirname, 'migrations/*.ts')],
};

const config: TypeOrmModuleOptions = {
  ...baseConfig,
};

const dataSource: DataSource = new DataSource({
  ...baseConfig,
});

export {
  config,
  dataSource,
};

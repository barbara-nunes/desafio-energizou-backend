import "reflect-metadata"
import { DataSource } from "typeorm"
import { Company } from "./entity/Company"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "MYSQL_USER",
    password: "MYSQL_PASSWORD",
    database: "energizoudb",
    synchronize: true,
    logging: false,
    entities: [Company],
    migrations: [__dirname + '/migration/**/*.ts'],
    subscribers: [],
})

AppDataSource.initialize()

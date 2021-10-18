import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Arch } from "src/crypto/models/arch.entity";
import { Blockchain } from "src/crypto/models/blockchain.entity";

export class PostgresConfiguration implements TypeOrmOptionsFactory{
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        const options:TypeOrmModuleOptions={
            type:'postgres',
            host:'localhost',
            port:5432,
            username:'postgres',
            password:'123456',
            database:'crypto-module-test',
            entities:[__dirname+'/../**/*.entity{.ts,.js}'],
            // entities:[Arch,Blockchain],
            synchronize:true
        }
        return options
    }
    
}
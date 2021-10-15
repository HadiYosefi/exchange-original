import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfiguration } from './postgres.config.service';

@Module({
    imports:[TypeOrmModule.forRootAsync({useClass:PostgresConfiguration})]
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { CryptoModule } from './crypto/crypto.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CryptoModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

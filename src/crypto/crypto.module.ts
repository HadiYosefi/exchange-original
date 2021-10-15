import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArchController } from './controllers/arch.controller';
import { BlockchainController } from './controllers/blockchain.controller';
import { CryptoController } from './controllers/crypto.controller';
import { ArchRepository } from './repositories/arch.repository';
import { BlockchainRepository } from './repositories/blockchain.repository';
import { CryptoAppearanceRepository } from './repositories/crypto-appearance.repository';
import { CryptoLimitRepository } from './repositories/crypto-limit.repository';
import { CryptoPricingRepository } from './repositories/crypto-pricing.repository';
import { CryptoRepository } from './repositories/crypto.repository';
import { ArchService } from './services/arch.service';
import { BlockchainService } from './services/blockchain.service';
import { CryptoService } from './services/crypto.service';

@Module({
    imports:[TypeOrmModule.forFeature([ArchRepository,BlockchainRepository,CryptoRepository,CryptoLimitRepository,CryptoAppearanceRepository,CryptoPricingRepository])],
    providers:[ArchService,BlockchainService,CryptoService],
    controllers:[ArchController,BlockchainController,CryptoController]
})
export class CryptoModule {}

import { Module } from '@nestjs/common';
import { VoitureService } from './voiture.service';
import { VoitureController } from './voiture.controller';

@Module({
  controllers: [VoitureController],
  providers: [VoitureService],
})
export class VoitureModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoitureModule } from './voiture/voiture.module';

@Module({
  imports: [VoitureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

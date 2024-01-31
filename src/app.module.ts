import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrowModule } from './grow/grow.module';

@Module({
  imports: [GrowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

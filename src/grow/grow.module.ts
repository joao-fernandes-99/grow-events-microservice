import { Module } from '@nestjs/common';
import { GrowService } from './grow.service';
import { growEventsProviders } from './grow.providers';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [GrowService, ...growEventsProviders],
})
export class GrowModule {}

import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Grow } from './interfaces/grow.interface';
import { CreateGrowEvent } from './dto/create-growEvent.dto';

@Injectable()
export class GrowService {
  constructor(
    @Inject('GROW_EVENT_MODEL')
    private growEventsModel: Model<Grow>,
  ) {}

  async create(createGrowEvent: CreateGrowEvent): Promise<Grow> {
    const newCreateGrowEvent = new this.growEventsModel(createGrowEvent);
    return newCreateGrowEvent.save();
  }
}

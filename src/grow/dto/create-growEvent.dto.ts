import { iot_data } from '../interfaces/grow.interface';

export class CreateGrowEvent {
  readonly event_type: string;
  readonly grow_device: string;
  readonly iot_data: iot_data;
}

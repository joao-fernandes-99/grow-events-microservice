import { Document } from 'mongoose';

export interface Grow extends Document {
  readonly event_type: string;
  readonly grow_device: string;
  readonly iot_data: iot_data;
}

interface atmospheric_pressure {
  readonly temperature: number;
  readonly absolute_pressure: number;
  readonly relative_pressure: number;
  readonly altitude: number;
}

export interface iot_data {
  readonly temperature: number;
  readonly humidity: number;
  readonly air_quality: number;
  readonly atmospheric_pressure: atmospheric_pressure;
}

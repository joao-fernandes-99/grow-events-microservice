import * as mongoose from 'mongoose';

export const GrowEventsSchema = new mongoose.Schema(
  {
    event_type: String,
    grow_device: String,
    iot_data: {
      temperature: Number,
      humidity: Number,
      air_quality: Number,
      atmospheric_pressure: {
        temperature: Number,
        absolute_pressure: Number,
        relative_pressure: Number,
        altitude: Number,
      },
    },
  },
  { timestamps: true },
);

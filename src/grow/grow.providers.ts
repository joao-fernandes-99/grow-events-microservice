import { Connection, connection } from 'mongoose';
import { GrowEventsSchema } from 'src/infra/database/schemas/growEventsSchema.schema';

export const growEventsProviders = [
  {
    provide: 'GROW_EVENT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('GrowEvents', GrowEventsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

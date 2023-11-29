import createAnalyticsFunction from '@/createAnalyticsFunction'

export type Data = {
  uuid: string; // PassengerUuid
  name: string; // Passenger full name
  id: number;
}

// Trigger on any event
export default createAnalyticsFunction<Data>('any/common/event')

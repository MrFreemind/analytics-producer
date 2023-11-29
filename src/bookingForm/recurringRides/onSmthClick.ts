import createAnalyticsFunction from '@/createAnalyticsFunction'

export type Data = {
  uuid: string;
  name: string;
  id: number;
}

export default createAnalyticsFunction<Data>('bookingForm|recurringRides|form|submit')

import createAnalyticsFunction from '@/createAnalyticsFunction'

export type Data = {
  passengers: []
  id: number;
}

export default createAnalyticsFunction<Data>('users-dashboard-user-form')

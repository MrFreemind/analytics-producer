import createAnalyticsFunction from '@/createAnalyticsFunction'

export type Data = {
    flightNumber: string;
    userId: number;
    flowUuid: string;
}

const example: Data = {
    flightNumber: '123',
    userId: 123,
    flowUuid: '123qwe-qwe'
}

export default createAnalyticsFunction<Data>('bookingForm|aexp|onEnterFlightNumber')

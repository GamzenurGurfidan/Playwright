import {test,expect} from '@playwright/test'
import { log } from 'console';
import exp from 'constants';
import { request } from 'http';

test.describe('Get API Test', () => {

    test('GET booking ID',async ({request})=>{

        const response = await request.get('/booking');
        const body = await response.json();
        console.log(body);
    

        expect(response.status()).toBe(200);
        expect(body.length).toBeGreaterThan(0);
        expect(body[3]).toHaveProperty('bookingid');
        expect(typeof body[28].bookingid).toBe('number')

    })

    test('getBookingID', async ({request}) => {

        const response = await request.get('booking/504')
        const body = await response.json();
        console.log(body);
        expect(response.status()).toBe(200)
        expect(body.firstname).toBe('John')
        expect(body.lastname).toBe('Smith')
        expect(body.totalprice).toBe(111)
        expect(body.depositpaid).toBe(true)
        expect(body.bookingdates.checkin).toBe('2018-01-01')
        expect(body.bookingdates.checkout).toBe('2019-01-01')


    })
})
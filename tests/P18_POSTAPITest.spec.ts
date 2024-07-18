import{test,expect} from '@playwright/test'
import { createBookingBody } from '../utils/helper'
import { brotliCompressSync } from 'zlib'

test.describe('POST API Tests', () =>{

    test('POST API Test1', async ({request}) => {

        const response = await request.post('booking', {
            data: {
                "firstname" : "Jimmy",
                "lastname" : "Kimmel",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2024-01-01",
                    "checkout" : "2025-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
        })

        const body = await response.json()
        console.log(await body);
        
        expect(response.status()).toBe(200);
        expect(body.booking.firstname).toBe('Jimmy')
        expect(body.booking.lastname).toBe('Kimmel')
        expect(body.booking.totalprice).toBe(111)
        expect(body.booking.depositpaid).toBe(true)
        expect(body.booking.bookingdates.checkin).toBe('2024-01-01')

    })

    test('POST API test2', async ({request}) => {
        const bookingBody = createBookingBody();
        const firstName = bookingBody.firstname;
        const lastName = bookingBody.lastname;

        const response = await request.post('/booking',{
            data: bookingBody,
        })

        const body = await response.json();
        console.log(body);
        

        expect(response.status()).toBe(200);
        expect(body.booking.firstname).toBe(firstName)
        expect(body.booking.lastname).toBe(lastName)
        expect(body.booking.depositpaid).toBe(true)
        expect(body.booking.totalprice).toBe(1000)
        expect(body.booking.additionalneeds).toBe(bookingBody.additionalneeds)
        expect(body.booking.bookingdates.checkin).toBe(bookingBody.bookingdates.checkin)
        expect(body.booking.bookingdates.checkout).toBe(bookingBody.bookingdates.checkout)


    })


})
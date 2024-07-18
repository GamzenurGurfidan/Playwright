import {test, expect} from '@playwright/test';
import { createBookingBody } from '../utils/helper';
let bookingID 

test.beforeAll(async({request}) => {
    const postBody = createBookingBody();

    const response = await request.post('/booking',{
        data : postBody
    })
    const body = await response.json()
    bookingID = body.bookingid;

})
    const putBody = {
            firstname: "Jimmow",
            lastname: "Kimmel",
            totalprice: 2324,
            depositpaid: true,
            bookingdates: {
              checkin: "2024-01-01",
              checkout: "2025-01-01"
            },
            additionalneeds: "Breakfast"
          }
   

test('PUT API Test', async({request}) => {
    const putResponse = await request.put(`/booking/${bookingID}`, { 
        data: putBody,
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
    })

    const body = await putResponse.json();

    expect(body.firstname).toBe(putBody.firstname)
    expect(body.lastname).toBe(putBody.lastname)
    expect(body.depositpaid).toBe(putBody.depositpaid)
    expect(body.totalprice).toBe(putBody.totalprice)
    expect(body.additionalneeds).toBe(putBody.additionalneeds)
}) 
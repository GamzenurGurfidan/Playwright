import{test,expect} from '@playwright/test'

export function createBookingBody (){
    const bookingBody = {
        firstname : "Jason",
        lastname : "Path",
        totalprice : 1000,
        depositpaid : true,
        bookingdates : {
                    checkin : "2024-01-01",
                    checkout : "2025-01-01"
        },
        additionalneeds : "Breakfast"
    }
    return bookingBody;
}
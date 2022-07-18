
/**
 * Using: 
 * a) supertest for request methods
 * b) jest for testing 
 * */ 
const request = require('supertest')
const app = require('../../app')
/**
 * DATA
 */
const fullLaunch = {
    launchDate: "January 7, 2025",
    mission: "hello",
    rocket: "rocket",
    target: "target"
}

const missingPropLaunch = {
    launchDate: "January 7, 2025",
    rocket: "rocket",
    target: "target"
}


const missingDateLaunch = {
    launchDate: "yolo",
    mission: "hello",
    rocket: "rocket",
    target: "target"
}
/**
 * TEST methods
 */
//describes can include multiple test 
describe('Test GET /launches', ()=>{
    test('Respond status = 200', async ()=>{
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200)
    })
})

describe('Test POST /launches', ()=>{
    test('Respond status = 201, return json', async ()=>{
        const response = await request(app)
        .post('/launches')
        .send(fullLaunch)
        .expect('Content-Type', /json/)
        .expect(201)
    })

    test('Invalid param: without one of the params', async ()=>{
        const response = await request(app)
        .post('/launches')
        .send(missingPropLaunch)
        .expect('Content-Type', /json/)
        .expect(400)
    })

    test('Invalid param: without date', async ()=>{
        const response = await request(app)
        .post('/launches')
        .send(missingDateLaunch)
        .expect('Content-Type', /json/)
        .expect(400)
    })
})




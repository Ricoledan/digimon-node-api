import request from 'supertest'
import server from '../server'

describe('GET requests return with 200', () => {
  it('GET root response', (done) => {
    request(server).get('/').expect(200, '[デジタルモンスター]', done)
  })
  // it('GET Profiles', (done) => {
  //   request(server)
  //     .get('/api/profiles')
  //     .set('Content-Type', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200, done)
  // })
})

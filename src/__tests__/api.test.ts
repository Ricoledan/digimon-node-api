import request from 'supertest'
import server from '../server'

describe('GET requests return with 200', () => {
  it('GET root response', async () => {
    await request(server).get('/').expect(200, '[デジタルモンスター]')
  })
})

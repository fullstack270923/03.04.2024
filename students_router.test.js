// requires the nodejs to be up and running
const chaiHttp = require('chai-http');
const chai = require('chai');

chai.use(chaiHttp);
const expect = chai.expect;

const assert = require('assert')

describe('Testing students dal', () => {

    // run before each test
    beforeEach(async () => {

    })

    it('test get students by id', (done) => {
        const studentId = 1;
        chai.request('http://localhost:9091')
            .get(`/api/students/${studentId}`)
            .end((err, response) => {
                expect(err).to.be.null;

                // const danny = { id: 1}
                // expect (danny).to.be.an('object');
                // expect (danny.id).to.equal(1);

                expect(response).to.have.status(200);
                expect(response.body).to.be.an('object');
                expect(response.body.name).to.equal('Arya Stark');

                assert.deepStrictEqual(response.body, {
                    "id": 1,
                    "name": "Arya Stark",
                    "age": 18,
                    "email": "arya.stark@example.com",
                    "city": "Winterfell"
                })
                done();
            })
    })
})
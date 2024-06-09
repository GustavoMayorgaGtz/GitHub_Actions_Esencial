import request from 'supertest';
import { expect } from 'chai';
import app from '../index.js'; // Importa tu aplicación

describe('GET /', () => {
    it('should return Hello World', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /text/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('Hello World');
                done();
            });
    });
});

describe('POST /data', () => {
    it('should return Hello, {name}!', (done) => {
        request(app)
            .post('/data')
            .send({ name: 'John' })
            .expect('Content-Type', /text/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('Hello, John!');
                done();
            });
    });

    it('should return 400 if name is not provided', (done) => {
        request(app)
            .post('/data')
            .send({})
            .expect('Content-Type', /text/)
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('Bad Request: name is required');
                done();
            });
    });
});

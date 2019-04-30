import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

import {
  signUpGood,
  signUpBad,
  signInGood,
  signInNoUser,
  signInBadRequest,
} from './test.data';

chai.use(chaiHttp);

const BASE_URI = '/api/v1';

const should = chai.should();
const { expect } = chai;

let Token = '';
let signinToken = '';

describe('Application test', () => {
  describe('Authorization of users', () => {
    it('Registers a user with the right set of data', (done) => {
      chai.request(app)
        .post(`${BASE_URI}/auth/signup`)
        .set('content-type', 'application/json')
        .send(signUpGood)
        .end((err, res) => {
        	Token = res.body.data.token;
          res.should.have.status(200);
          res.type.should.eql('application/json');
          should.exist(res.body.data.firstName);
          should.exist(res.body.data.lastName);
          should.exist(res.body.data.email);
          should.exist(res.body.data.occupation);
          should.exist(res.body.data.address);
          should.exist(res.body.data.phoneNumber);
          should.exist(res.body.data.age);
          should.exist(res.body.data.nationality);
          should.exist(res.body.data.gender);
          should.exist(res.body.data.id);
          should.exist(res.body.data.token);
          res.body.data.firstName.should.eql('Zabuza');
          res.body.data.lastName.should.eql('Momochi');
          res.body.data.email.should.eql('Momochi@gmail.com');
          res.body.data.occupation.should.eql('Ninja');
          res.body.data.address.should.eql('19, flood street rd., Hidden Mist');
          res.body.data.phoneNumber.should.eql('08077998844');
          res.body.data.age.should.eql(21);
          res.body.data.nationality.should.eql('Japanese');
          res.body.data.gender.should.eql('male');
          res.body.data.token.should.eql(Token);
          done();
        });
    });

    it('try to egister a user with a bad set of data', (done) => {
      chai.request(app)
        .post(`${BASE_URI}/auth/signup`)
        .set('content-type', 'application/json')
        .send(signUpBad)
        .end((err, res) => {
          res.should.have.status(400);
          res.type.should.eql('application/json');
          should.exist(res.body.error);
          should.exist(res.body.message);
          res.body.error.should.eql('Bad request');
          res.body.message.should.eql('Bad input format');
          done();
        });
    });
  });

  describe('Signing In a user', () => {
    it('signs in a user with a good data', (done) => {
      chai.request(app)
        .post(`${BASE_URI}/auth/signin`)
        .set('content-type', 'application/json')
        .send(signInGood)
        .end((err, res) => {
        	signinToken = res.body.data.token;
          res.should.have.status(200);
          res.type.should.eql('application/json');
          should.exist(res.body.data.firstName);
          should.exist(res.body.data.lastName);
          should.exist(res.body.data.email);
          should.exist(res.body.data.occupation);
          should.exist(res.body.data.address);
          should.exist(res.body.data.phoneNumber);
          should.exist(res.body.data.age);
          should.exist(res.body.data.nationality);
          should.exist(res.body.data.gender);
          should.exist(res.body.data.id);
          should.exist(res.body.data.token);
          res.body.data.firstName.should.eql('Zabuza');
          res.body.data.lastName.should.eql('Momochi');
          res.body.data.email.should.eql('Momochi@gmail.com');
          res.body.data.occupation.should.eql('Ninja');
          res.body.data.address.should.eql('19, flood street rd., Hidden Mist');
          res.body.data.phoneNumber.should.eql('08077998844');
          res.body.data.age.should.eql(21);
          res.body.data.nationality.should.eql('Japanese');
          res.body.data.gender.should.eql('male');
          res.body.data.id.should.eql(1);
          res.body.data.token.should.eql(signinToken);
          done();
        });
    });

    it('trys to signin a user that doesn\'t exist', (done) => {
      chai.request(app)
        .post(`${BASE_URI}/auth/signin`)
        .set('content-type', 'application/json')
        .send(signInNoUser)
        .end((err, res) => {
          res.should.have.status(404);
          res.type.should.eql('application/json');
          should.exist(res.body.error);
          should.exist(res.body.message);
          res.body.error.should.eql('Not found');
          res.body.message.should.eql('User not found');
          done();
        });
    });

    it('trys to signin a user with a bad email address', (done) => {
      chai.request(app)
        .post(`${BASE_URI}/auth/signin`)
        .set('content-type', 'application/json')
        .send(signInBadRequest)
        .end((err, res) => {
          res.should.have.status(400);
          res.type.should.eql('application/json');
          should.exist(res.body.error);
          should.exist(res.body.message);
          res.body.error.should.eql('Bad request');
          res.body.message.should.eql('Bad input format');
          done();
        });
    });
  });

  describe('APP is life', () => {
    it('checks if the application is now life', (done) => {
      chai.request(app)
        .get('/')
        .set('content-type', 'application/json')
        .end((err, res) => {
          res.should.have.status(200);
          res.type.should.eql('application/json');
          should.exist(res.body.message);
          res.body.message.should.eql('App is life');
          done();
        });
    });
  });
});

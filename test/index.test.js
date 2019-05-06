import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
import PORT from '../server/config/port';

import {
  signUpGood,
  signUpBad,
  signInGood,
  signInNoUser,
  signInBadRequest,
  signUpAdmin,
  signUpUnauthorizedUser
} from './test.data';

import { applyForALoan } from './test.data/laon.test'

chai.use(chaiHttp);

const BASE_URI = '/api/v1';

const should = chai.should();
const { expect } = chai;

let Token = '';
let signinToken = '';
let adminToken = '';
let badToken = '';

console.log('test start!')

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
          should.exist(res.body.data.isVerified);
          should.exist(res.body.data.role);
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
          res.body.data.isVerified.should.eql(false);
          res.body.data.role.should.eql('User');
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

  describe('Admin signup', () => {
    it('Registers an Admin', (done) => {
      chai.request(app)
        .post(`${BASE_URI}/auth/signup`)
        .set('content-type', 'application/json')
        .send(signUpAdmin)
        .end((err, res) => {
          res.should.have.status(200);
          res.type.should.eql('application/json');
        	adminToken = res.body.data.token;
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
          should.exist(res.body.data.isVerified);
          should.exist(res.body.data.role);
          res.body.data.firstName.should.eql('Kaguya');
          res.body.data.lastName.should.eql('Otsusuki');
          res.body.data.email.should.eql('kaguya@gmail.com');
          res.body.data.occupation.should.eql('Mother Ninja');
          res.body.data.address.should.eql('Sealed in the moon');
          res.body.data.phoneNumber.should.eql('08077998844');
          res.body.data.age.should.eql(99);
          res.body.data.nationality.should.eql('Japanese');
          res.body.data.gender.should.eql('female');
          res.body.data.token.should.eql(adminToken);
          res.body.data.isVerified.should.eql(false);
          res.body.data.role.should.eql('Admin');
          done();
        });
    });

    it('Registers an Admin', (done) => {
      chai.request(app)
        .post(`${BASE_URI}/auth/signup`)
        .set('content-type', 'application/json')
        .send(signUpUnauthorizedUser)
        .end((err, res) => {
          res.should.have.status(200);
          res.type.should.eql('application/json');
          badToken = res.body.data.token;
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
          should.exist(res.body.data.isVerified);
          should.exist(res.body.data.role);
          res.body.data.firstName.should.eql('Momoshiki');
          res.body.data.lastName.should.eql('Otsusuki');
          res.body.data.email.should.eql('momshiki@gmail.com');
          res.body.data.occupation.should.eql('karmar');
          res.body.data.address.should.eql('Rogue Ninja');
          res.body.data.phoneNumber.should.eql('08077998844');
          res.body.data.age.should.eql(40);
          res.body.data.nationality.should.eql('Japanese');
          res.body.data.gender.should.eql('male');
          res.body.data.token.should.eql(badToken);
          res.body.data.isVerified.should.eql(false);
          res.body.data.role.should.eql('UnwantedUser');
          done();
        });
    });     	
  })

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

  describe('Checks the port', () => {	
    it('checks if the port is at 9001', (done) => {
    	expect(PORT).to.equal(9001)
    	done()
    });
  });

  describe('Verify a user', () => {
    it('It checks and verifies a user', (done) => {
      chai.request(app)
        .patch(`${BASE_URI}/users/${signUpAdmin.email}/verify`)
        .set('content-type', 'application/json')
        .set('Authorization', adminToken)
        .end((err, res) => {
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
          should.exist(res.body.data.isVerified);
          should.exist(res.body.data.role);
          res.body.data.firstName.should.eql('Kaguya');
          res.body.data.lastName.should.eql('Otsusuki');
          res.body.data.email.should.eql('kaguya@gmail.com');
          res.body.data.occupation.should.eql('Mother Ninja');
          res.body.data.address.should.eql('Sealed in the moon');
          res.body.data.phoneNumber.should.eql('08077998844');
          res.body.data.age.should.eql(99);
          res.body.data.nationality.should.eql('Japanese');
          res.body.data.gender.should.eql('female');
          res.body.data.isVerified.should.eql(true);
          res.body.data.role.should.eql('Admin');
          done();
        });
    });

    it('trys to verify a user without any token', (done) => {
      chai.request(app)
        .patch(`${BASE_URI}/users/${signUpGood.email}/verify`)
        .set('content-type', 'application/json')
        .end((err, res) => {
          res.should.have.status(500);
          res.type.should.eql('application/json');
          should.exist(res.body.error);
          should.exist(res.body.message);
          res.body.error.should.eql('Internal server error');
          res.body.message.should.eql('Error resolving token');
          done();
        });
    });

    it('trys to verify a user without an admin token', (done) => {
      chai.request(app)
        .patch(`${BASE_URI}/users/${signUpGood.email}/verify`)
        .set('content-type', 'application/json')
        .set('Authorization', Token)
        .end((err, res) => {
          res.should.have.status(401);
          res.type.should.eql('application/json');
          should.exist(res.body.error);
          should.exist(res.body.message);
          res.body.error.should.eql('Authorization Error');
          res.body.message.should.eql('You do not have the access to perform this action');
          done();
        });
    });
  });

  describe('Application for a loan test', () => { 
    it('Accepts application for loan for a user', (done) => {
      chai.request(app)
        .post(`${BASE_URI}/loans`)
        .set('content-type', 'application/json')
        .set('Authorization', Token)
        .send(applyForALoan)
        .end((err, res) => {
          res.should.have.status(200);
          res.type.should.eql('application/json');
          should.exist(res.body.data.id);
          should.exist(res.body.data.user);
          should.exist(res.body.data.createdOn);
          should.exist(res.body.data.status);
          should.exist(res.body.data.repaid);
          should.exist(res.body.data.tenor);
          should.exist(res.body.data.amount);
          should.exist(res.body.data.paymentInstallment);
          should.exist(res.body.data.balance);
          should.exist(res.body.data.interest);
          res.body.data.id.should.eql(1);
          res.body.data.user.should.eql('Momochi@gmail.com');
          res.body.data.createdOn.should.eql(new Date().toDateString());
          res.body.data.status.should.eql('pending');
          res.body.data.repaid.should.eql(false);
          res.body.data.tenor.should.eql(2);
          res.body.data.amount.should.eql(50000);
          res.body.data.paymentInstallment.should.eql(2.5);
          res.body.data.balance.should.eql(15000);
          res.body.data.interest.should.eql(0.20);                 
          done()
        })
    });

    it('Declines the application for a loan since no token was provided', (done) => {
      chai.request(app)
        .post(`${BASE_URI}/loans`)      
        .set('content-type', 'application/json')
        .send(applyForALoan)
        .end((err, res) => {
          res.should.have.status(500);
          res.type.should.eql('application/json');
          should.exist(res.body.data.error);
          should.exist(res.body.data.message);
          res.body.data.id.should.eql('Internal Server error');
          res.body.data.user.should.eql('It seems like you do not have the access to perform this action');            
          done()
        })
    });

    it('Declines the application for a loan since no token was provided', (done) => {
      chai.request(app)
        .post(`${BASE_URI}/loans`)      
        .set('content-type', 'application/json')
        .set('Authorization', badToken)
        .send(applyForALoan)
        .end((err, res) => {
          res.should.have.status(401);
          res.type.should.eql('application/json');
          should.exist(res.body.data.error);
          should.exist(res.body.data.message);
          res.body.data.id.should.eql('Unauthorized User');
          res.body.data.user.should.eql('You do not have the access to this resource.');            
          done()
        })
    });    
  });

});

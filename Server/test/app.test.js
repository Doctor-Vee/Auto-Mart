import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Default route', () => {
  it('Should return a 200 status code and a welcome message',
    (done) => {
      chai.request(app)
        .get('/')
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.be.equal(200);
          expect(res.body.message).to.equal('Welcome to AutoMart');
          done();
        });
    });
});

describe('Invalid Url', () => { 
  it('Should return a 404 status code',
    (done) => {
      chai.request(app)
        .get('/v1/automart')
        .end((error, res) => {
          expect(res).to.have.status(404);
          // expect(res.body.status).to.be.equal(404);
          // expect(res.body.error).to.equal('This url does not exist');
          done();
        });
    });
});


// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import server from '../../app';

// chai.use(chaiHttp);
// const { expect } = chai;

// describe('Test Server', () => {
//   it('should display a welcome message at default route', (done) => {
//     chai
//       .request(server)
//       .get('/')
//       .end((err, res) => {
//         expect(res.status).to.eql(200);
//         // expect(res.body).to.eql('Welcome to EPIC Mail');
//         done();
//       });
//   });
//   it('should return 404 on wrong api call', (done) => {
//     chai
//       .request(server)
//       .get('/epic')
//       .end((err, res) => {
//         expect(res.status).to.eql(404);
//         done();
//       });
//   });
// });

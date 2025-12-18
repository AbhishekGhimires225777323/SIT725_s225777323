const request = require("request");
const chai = require("chai");

const expect = chai.expect;
const BASE_URL = "http://localhost:3000";

describe("Sum Calculator API (Running Server)", () => {
  it("returns status 200 to check if api works", (done) => {
    request.get(`${BASE_URL}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return correct sum for valid numbers", (done) => {
    const options = {
      url: `${BASE_URL}/api/add`,
      method: "POST",
      json: true,
      body: { a: 5, b: 3 },
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body.result).to.equal(8);
      done();
    });
  });

  it("should handle missing parameters", (done) => {
    const options = {
      url: `${BASE_URL}/api/add`,
      method: "POST",
      json: true,
      body: { a: 5 },
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(body.error).to.exist;
      done();
    });
  });

  it("should return error for non-numeric input", (done) => {
    const options = {
      url: `${BASE_URL}/api/add`,
      method: "POST",
      json: true,
      body: { a: "5", b: 3 },
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(body.error).to.exist;
      done();
    });
  });
});

const app = require('express')();
const expect = require('chai').expect;
const request = require('request');
const func = require('../function.js');

let data = 'This is a Sample Array for the test file. The array has words for test';
let array = ['this', 'is', 'a', 'sample', 'array', 'for', 'the', 'test', 'file', 'the', 'array', 'has', 'words', 'for', 'test'];
let number = 5;

describe('Page status', () => {
  it('index page status', () => {
    request.get('http://localhost:8000/' , (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  })
  it('result page status', () => {
    request.post('http://localhost:8000/result', (error, response, result) => {
      expect(response.statusCode).to.equal(200);
    })
  })
})

describe('Frequency Function', () => {
  it('Should return an array', () => {
    expect(func.frequency(array)).to.be.an('array')
  })
  it('Should be of even length', () => {
    let arr = func.frequency(array);
    let val = (arr.length)%2;
    expect(val).to.equal(0);
  })
  it('Should have length 22', () => {
    expect(func.frequency(array)).to.have.lengthOf(22);
  })
  it('Frequency of "the" should be 2', () => {
    let arr = func.frequency(array);
    let index = arr.indexOf('the');
    let freq = arr[index + 1]
    expect(freq).to.equal(2);
  })
})

describe('Convert Function', () => {
  it('Should return an array', () => {
    expect(func.convert(data, number)).to.be.an('array')
  })
  it('Should have length equal to N(5)', () => {
    expect(func.convert(data, number)).to.have.lengthOf(5);
  })
  it('Should have every element as array of length 2', () => {
    func.convert(data, number).forEach((arr) => {
      expect(arr).to.be.an('array').and.have.lengthOf(2);
    })
  })
  it('Should have every nested arrays first element string and second number', () => {
    func.convert(data, number).forEach((arr) => {
      expect(arr[0]).to.be.an('string');
      expect(arr[1]).to.be.a('number');
    })
  })
})

'use strict';

const yepnope = require('../lib/index.js')
const assert = require('assert')

describe('init', ()=>{
    it('who tests the tests?', ()=>{
      expect(true).toBe(true);
    })
})

describe('Yepnope', ()=>{

  it('should create a yepnope obj', () => {
    let obj = new yepnope()

    expect(typeof obj).toBe('object')
    expect(obj instanceof yepnope).toBe(true)
  })


  it('should define  .true and .false', () => {
    let obj = new yepnope()

    expect(obj.true).toBeDefined()
    expect(obj.false).toBeDefined()
    expect(obj.parse).toBeDefined()
    expect(typeof obj.parse).toBe('function')

  })

  describe('.parse()', () => {
     it('should be chainable', () => {
      let obj = new yepnope()
      let obj2 = obj.parse()
      let obj3 = obj.parse().parse()

      expect(obj == obj2).toBe(true)
      expect(obj3 == obj3).toBe(true)

      expect(obj instanceof yepnope).toBe(true)
      expect(obj2 instanceof yepnope).toBe(true)
      expect(obj3 instanceof yepnope).toBe(true)

    })
  })


  describe(' is POSITIVE about', () => {

    it('simple YES', () => {
      let obj = new yepnope('yes');

      expect(obj.true).toBe(true)
      expect(obj.false).toBe(false)
    })

    it('complex YES', () => {
      let options = [
        'yep', 'yepp', 'y', 'yy', 'sure', 'ok', 'oki', 'okay', 'true', 'affirmative', 'why not?'
      ];

      options.forEach(yep => {
        expect((new yepnope(yep)).true).toBe(true, yep + ' means yes')
      })

    })

  })

  describe(' is NEGATIVE about', () => {

    it('simple NO', () =>{
      let obj = new yepnope('no');

      expect(obj.false).toBe(true)
      expect(obj.true).toBe(false)
    })

    it('complex NO', () => {
      let options = [
          'nope', 'n', 'nn', 'nepia', 'not', 'not today', 'nooope', 'noo', 'nooo', 'false', 'negative'
        ];

      options.forEach(nope => {
        expect((new yepnope(nope)).false).toBe(true, nope + ' means NO')
      })

    })

  })

});
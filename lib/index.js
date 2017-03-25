'use strict';


function isTrue(instance){
  instance.true = true;
  return instance;
}

function isFalse(instance){
  instance.false = true;
  return instance;
}

const YEP = [ 'yep', 'yepp', 'y', 'yy', 'sure', 'ok', 'oki', 'okay', 'true', 'affirmative', 'why not?']
const NOPE = [ 'nope', 'n', 'nn', 'nepia', 'not', 'not today', 'nooope', 'noo', 'nooo', 'false', 'negative']

class yepnope {

    constructor(input){
      if(typeof input === 'undefined'){
        input = '';
      }

      this.true = false;
      this.false = false;

      this.parse(input.toLowerCase())

      return this;
    }


    parse(i){
      // fast in your face answers
      if(i === 'yes'){
        return isTrue(this)
      }else if(i === 'no'){
        return isFalse(this)
      }

      if(YEP.indexOf(i) !== -1){
        return isTrue(this)
      }


      if(NOPE.indexOf(i) !== -1){
        return isFalse(this)
      }

      return this;
    }
}

module.exports = yepnope;
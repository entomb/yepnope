Yepnope
=======
[![Build Status](https://travis-ci.org/entomb/yepnope.svg?branch=master)](https://travis-ci.org/entomb/yepnope)

Yepnope transforms yes/no answers into bools, very usefull for chatbots and command line tools.

## Usage
require the lib using `const yepnope = require('yepnoe')`

```javascript
  var ok = new yepnope('yes')
  //ok.true === true


  var notok = new yepnope('nope')
  //notok.false === true
```

## Example
```javascript
  function parseAnswer(text){
    var response = new yepnope(text);

    if(response.true){
      return 'thanks! i\'ll do that!';
    }

    if(response.false){
      return 'ups! i\'ll do something else then!';
    }

    if(!response.false && !response.true){
      return 'I don\'t understand!'
    }

  }
```
## yep detection:
### yepnope is POSITIVE about:
- 'yes.'
- 'yy'
- 'yepp'
- 'y! do that!'
- 'YeS in special CASE'
- 'yeah, sure!'
- 'yes please'
- 'yep @botname'
- 'sure, @botname'
- 'yes! i would like that!'


### yepnope is NEGATIVE about:
- 'no.'
- 'nn'
- 'nope'
- 'noope'
- 'n! dont do that'
- 'nOpE in special CASE'
- 'nope, not today!'
- 'no please'
- 'no @botname'
- 'nooope, @botname'
- 'NO! i wont like that!'


### yepnope is UNSURE about:
- '', 
- 'not sure'
- 'dont want no short dick men'
- 'what'
- 'why not?'
- 'some phrase with yes in it'
- 'some phrase with no in it'
- 'dfa sdf asdf '
- 3
- {}
- []
- undefined
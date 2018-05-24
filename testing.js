let figureFormat = require('./formattingFigures');

let number ="12345";

if (isNaN(number)){
  figureFormat.valueChecker(function(error_message){
    console.log(error_message)
  })
}
else if(typeof number == 'string'){
  //converting strings to number
  let value = Number(number);
  
 console.log( figureFormat.Arabic(value));
  }
else{
 console.log( figureFormat.Arabic(number));
//input 45,678,901: expecting output 45,678,901
}
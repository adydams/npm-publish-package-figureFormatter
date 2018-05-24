let figureFormat = {}

const ERROR ={
  INVALID_MSG: "Your value must be a number"
};
figureFormat.valueChecker= function(fn){
    return fn(ERROR.INVALID_MSG);
};
figureFormat.figureFormatter= function (x){
  return x.toLocaleString('ar-EG');
}
figureFormat.Arabic = function(x){
  return x.toLocaleString();
}


module.exports = figureFormat;

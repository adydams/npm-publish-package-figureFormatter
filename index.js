figureFormatter = function(number){
    let splitFigure = number.split('');
    console.log(splitFigure);

    numberLength = number.length;
    console.log(numberLength)
    if (numberLength % 3 == 0){
       let formattedValue = number.match(/.{1,3}/g);
      // match(/.{1,3})/g)
       console.log(formattedValue)
    }
    else{ if (numberLength % 3 == 1){
         let numberPrefix = ['0','0']
        // let newNumber =[...numberPrefix, splitFigure]
        let newNumberArray = numberPrefix .concat(splitFigure);
        let newStringValue = newNumberArray.join('');
        let formattedValue = newStringValue.match(/.{1,3}/g);
        console.log(formattedValue.join(','))
        }
        else if (numberLength % 3 == 2){
         let numberPrefix = ['0']
        // let newNumber =[...numberPrefix, splitFigure]
        let newNumberArray = numberPrefix .concat(splitFigure);
        let newStringValue = newNumberArray.join('');
        let formattedValue = newStringValue.match(/.{1,3}/g);
        console.log(formattedValue.join(','))
        }
    }
}
let value ='23455';
figureFormatter(value);
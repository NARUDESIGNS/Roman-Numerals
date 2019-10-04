let converter = {

    input : document.getElementById('input'),

    result : document.getElementById('result'),

    button : document.getElementById('button'),

    toRomanNum (num){
    
        if (num > 3000){
            return 'Please insert a number not more than 3000!';
        } else if ((num < 0) || (num == 0)){
            return 'Please insert a number greater than 0!';
        }
    
        // roman numerals object
        let romObj = {
            '1': 'I', '2': 'II', '3': 'III', '4': 'IV', '5': 'V', '6': 'VI', '7': 'VII', '8': 'VIII', '9': 'IX', '10': 'X',
            '20':'XX', '30':'XXX', '40':'XL', '50':'L', '60':'LX', '70':'LXX', '80':'LXXX', '90':'XC', '100':'C',
            '200':'CC', '300':'CCC', '400':'CD', '500':'D', '600':'DC', '700':'DCC', '800':'DCCC', '900':'CM', '1000':'M',
            '2000':'MM', '3000':'MMM'
        }
    
        num = num.toString();
        let numLength = num.length;
        let length = num.length;
        let romanNum = '';
        let val = '';
    
        for (i=0; i<numLength; i++){
            val = num[0];
    
            // add 0s to each number depending on the number of numbers after it
            for (j=1; j<length; j++){
                val += '0';
            }
    
            // for numbers like 2002, after 1st iteration, val will == 000 after zero's has been added to it
            // in this case, we are add nothing to romanNum else we check for such property in the romObj object and add it to romanNum
            if (val == 0){
                romanNum += '';
            } else {
                romanNum += romObj[val];
            }
    
            // we remove the first value of num by using substr()
            num = num.substr(1,(length - 1));
            length = num.length;
            val = '';
        }
    
        return romanNum;
    },

    convert (){

        button.addEventListener('click', function(){

            let inputVal = converter.input.value;
        
            let convertedFormat = converter.toRomanNum(inputVal);

            converter.result.innerText = convertedFormat;
        });
    }
   
}

converter.convert();

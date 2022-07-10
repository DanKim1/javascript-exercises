const reverseString = function(revString) {
    let resultString = '';

    for(let i = revString.length; i > 0; i--){
        resultString = resultString + revString[i -1];
    }    

    return resultString;
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function(word, iter) {
    let result = '';

    if(iter >= 0){
        for(let i = 0; i < iter; i++){
            result = result + word;
        }

        return result;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;

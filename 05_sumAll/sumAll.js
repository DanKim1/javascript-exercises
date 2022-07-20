const sumAll = function(startNum, endNum) {
    let total = 0;

    if(startNum > endNum){
        for(let i = startNum; i >= endNum; i--){
            total = total + i;
        }
    }
    else{
        for(let j = startNum; j <= endNum; j++){
            total = total + j
        }
    }

    if(startNum < 0 || endNum < 0 || !Number.isInteger(startNum) || !Number.isInteger(endNum)){
        total = 'ERROR';
    }
        return total;
};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function(arr, ...theArgs) {
    for(let j = 0; j < theArgs.length; j++){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === theArgs[j]){
                arr.splice(i, 1);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

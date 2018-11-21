//write a custom range function that returns an array 
//write a sum function that will sum the array 
//bonus add a third parameter to the range function to account for step

function range(begin, end, step){
    if(step == null){ step = 1;}
    let result = [];
    step = Math.abs(step);
    if(begin < end){
        for(let i = begin; i <= end; i += step){ result.push(i); }
    } else{
        for(let i = begin; i >= end; i -= step){ result.push(i); }
    }
    return result;
}

function sum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

//reverse an array 
function rev(arr){
    let result = [];

    for(let i = arr.length - 1; i >= 0; i--){
        result.push(arr[i]);
    }
    return result;
}

//create a list from array format shown below
var list = { 
    value: 1, 
    next: {
        value: 2, 
        next: {
            value: 3, 
            next: null
        }
    }
}

function arrayToList(arr){
    let list = {};
    for(let i = arr.length - 1; i >= 0; i--){
        list = {value: arr[i], next: list};
    }
    
    return list;
}

function listToArray(list){
    let array = [];
    while(list.next !== undefined){
        array.push(list.value);
        list = list.next;
    }
    return array;
}

function prependList(x, list){
    let result = {
        value: x, 
        next: list
    }
    return result;
}

function nthFromList(index, list){
    let counter = 0;
    while(list.next !== undefined){
        if(index == counter){
            return list.value;
        }
        list = list.next;
        counter++; 
    }
    return false;
}

function deepCompare(obj1, obj2){
    //check if properties are equal 
    let obj1Props = [];
    let obj1Vals = [];
    for(let x in obj1){
        obj1Props.push(x);
        obj1Vals.push(obj1[x]);      
    }
    let obj2Props = [];
    let obj2Vals = [];
    for(let y in obj2){
        obj2Props.push(y);    
        obj2Vals.push(obj2[y]);  
    }
    //compare properties 
    for(let i = 0; i < obj1Props.length; i++){
        if(obj1Props[i] != obj2Props[i]){
            console.log("different properties ");
            return false;
        }
        if(obj1Vals[i] != obj2Vals[i]){
            console.log("different values ");
            return false;
        }
    }
    return true;
}
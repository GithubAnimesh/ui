function sortArray(numbers){
    let a = 0;
    for(let i = 0; i <= numbers.length; i++){
    
    if(a <= numbers[i]){
    a = numbers[i];
    }
    
    }
    return a;
    }
    var numbers = [2,1,5,10,4,7,9];
    sortArray(numbers);
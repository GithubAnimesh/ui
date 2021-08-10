arr = [1,2,3,4,5,6,7,8,9,10];
function printArray(arr){
    let curr = 0, count = 1;
    let itemToPrint = "";
    arr.forEach(item => {
        //if there is item present in 'itemToPrint' then add space with next item
        itemToPrint = itemToPrint.length ? `${itemToPrint} ${item}`: `${item}`;
        curr++; // update current counter
        //if current counter is equal to count then print the values
        if (curr == count){
            console.log(`${itemToPrint}`);
            //reset string
            itemToPrint = "";
            // increment by 1 for next number of items to be printed in same line
            count = count + 1; 
            //reset current counter to 0
            curr = 0;
        } 
    });    
}


/*
Output:
1
2 3
4 5 6
7 8 9 10
*/

/*
for(var i=1; i<=4; i++)
{
    console.log(`${i}` .repeat(i));
}

OutPut:
1
22
333
4444
*/
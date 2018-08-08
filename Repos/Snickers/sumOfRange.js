

function findMax (arr) {
// an array of numbers
var maxnumber = [0.0,0,0];
for (var aarayIndex = 0; arrayIndex <
arr.length; arrayIndex++)
{ for (var subArrayIndex =0;
subArrayIndex < arr[arrayindex].length; subArrayIndex++){
if (arr[arrayindex][subArrayIndex] > maxnumber[arrayIndex]=arr[arrayindex]
    [subArrayIndex];
}
   }
} 
return maxnumber;
}
findMax([17,42,311,5,9,10,28,7,6])
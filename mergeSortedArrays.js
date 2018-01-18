function mergeArrays(A, B) {
    var resultArray = [];
    var l1 = A.length;
    var l2 = B.length;
    var i = 0;
    var j = 0;

    while (i < l1 && j < l2 ) {
        if (A[i] >= B[j]) {
            resultArray.push(B[j]);
            j++;
        } else if (A[i] <= B [j]) {
            resultArray.push(A[i]);
            i++;
        }
    }
    if (i !== l1) {
        resultArray = resultArray.concat(A.slice(i, l1))
    }
    if (j !== l2) {
        resultArray = resultArray.concat(B.slice(j, l2))
    }

    return resultArray;
}
var a1= [1,3,5,7,9,10];
var a2= [0,2,4,6,8];

var k = mergeArrays(a1, a2);
k


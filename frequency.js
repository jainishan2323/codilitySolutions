function calculateFrequ(A, B) {
    var As = A.sort((a, b) => a-b);
    var Bs = B.sort((a, b) => a-b);
    var count = 1;
    var max = 1;
    var i = 1;
    var j = 0;
    while (i < As.length && j < Bs.length) {
        if (As[i] <= Bs[j]) {
            count++;
            i++;
        } else {
            count--;
            j++;
        }
        count
        if (count > max) {
            max = count
        }
        
    }
    return max;
    // for (var i=0; i<As.length; i++) {
    //     if (As[i] < Bs[i]) {
    //         count++;
    //     }
    //     if (As[i] > Bs[i]) {
    //         count--;
    //     }
    //     if (count > max) {
    //         max = count
    //     }
    // }
    // return max;
}

var inA = [1,2,10,5,5, 4];
var outA = [4,5,12,9,12, 6];

var j = calculateFrequ(inA, outA);
j

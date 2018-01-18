function merge(leftA, rightA) {
    let sorted = [];
    while (leftA.length !== 0 && rightA.length !==0) {
        if (leftA[0] < rightA[0]) {
            sorted.push(leftA.shift())
        } else {
            sorted.push(rightA.shift())
        }
    }
    return sorted.concat(leftA).concat(rightA);
}

function MergeSort(A) {
    const mid = Math.floor(A.length/2);
    let sorted = [];
    if (A.length < 2) {
        return A;
    } else {
        sorted = merge(MergeSort(A.slice(0, mid)), MergeSort(A.slice(mid, A.length)))
    }

    return sorted;
}

var arr = [23, 44, 12, -100, -99, 9, 32];
var k = MergeSort(arr);


function BubbleSort(A) {
    for (var i=0; i<A.length; i++) {
        for (var j=i; j<A.length; j++) {
            
        }
    }
}

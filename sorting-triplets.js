function productTriplet(A) {
    const sortedArr = A.sort(sortParam);
    const len = A.length;
    console.log(A);
    return Math.max(A[0]*A[1]*A[len-1], A[len-1]*A[len-2]*A[len-3])
}

function sortParam(a,b) {
    return a > b
}
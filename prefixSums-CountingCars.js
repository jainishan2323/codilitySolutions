// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(A) {
    return countPassingCars(A)
}

function countPassingCars(A) {
    const counterArray = [];
    let carsCount = 0;
    let totalCarsPair = -1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 1) {
            carsCount++;
        } else {
            counterArray.push(carsCount);
        }
    }
    for (let j = 0; j < counterArray.length; j++) {
        counterArray[j] = carsCount - counterArray[j];
    }
    if (counterArray.length === 0) return 0;
    totalCarsPair = counterArray.reduce((sum, val) => sum + val);

    return totalCarsPair < 1000000001 ? totalCarsPair : -1;
}
function BinarySearch(arr, value) {
    let mid = Math.floor(arr.length/2);
    if (value < arr[0]) return -1;
    if (value > arr[arr.length -1]) return -1;
    value
    while (mid >= 0) {
        mid
        if (value === arr[mid]) return mid;
        if (value < arr[mid]) {
            mid = Math.floor(mid/2);
        } else if (value > arr[mid]) {
            mid = Math.floor((arr.length + mid)/2)
        }
    }
    return -1;
}

var k = BinarySearch([-20, 12, 14, 18, 22, 25, 29], 29);
k



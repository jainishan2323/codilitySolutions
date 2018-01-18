function getUpdatesMode(A, B) {
    var result = [];
    var arr = A.concat();
    for (var i=0; i<B.length; i++) {
        updateArray(arr, B[i]);
        var mode = getMode(arr);
        mode
        result.push(mode)
    }
    return result;
}

function updateArray(A, update) {
    A[update[0] - 1] = update[1];
    return A;
}

function getMode(A) {
    // need to sort
    var map = createHash(A);
    let mode = null;
    let max = -1/0;
    for (var key in map) {
        if (map[key] > max) {
            max = map[key];
            mode = key;
        }
    }
    return parseInt(mode);
}

function createHash(A) {
    var map={};
    A.forEach((val) => {
        if (map.hasOwnProperty(val)) {
            map[val] = map[val] + 1;
        } else {
            map[val] = 1;
        }
    });
    return map;
}

var A = [2,2,2,3,3]
var B = [ [1, 3], [5, 4], [2, 4] ];

var j = getUpdatesMode(A, B);
j

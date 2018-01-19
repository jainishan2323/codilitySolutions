function createHashMap(pattern) {
    var map = {};
    pattern.split("").forEach((val) => {
        if (map.hasOwnProperty(val)) {
            map[val] = map[val] + 1;
        } else {
            map[val] = 1;
        }
    });
    return map;
}

var k = createHashMap("tist");
k

function getWindow(string, pattern) {
    var patternMap = createHashMap(pattern);
    var strinArray = string.split("");
    var count = 0;
    var start_index = -1;
    var store_index = true;
    var iterator = 0;
    var tail_index = string.length;
    var second_param = false;
    var window_shift_index = -1;
    var minWindowLength = 100000;
    var substring = "";

    while (iterator < string.length) {
        if (patternMap.hasOwnProperty(strinArray[iterator])) {
            console.log(iterator)
            if (patternMap[strinArray[iterator]] > 0) {
                patternMap[strinArray[iterator]] = patternMap[strinArray[iterator]] - 1;
                count++;
            }

            if (second_param) {
                window_shift_index = iterator;
                second_param = false;
            }

            if (store_index) {
                start_index = iterator;
                store_index = false;
                second_param = true;
            }
        }
        if (count === pattern.length) {
            // store window length and compare with previous lengths
            // reset createHash
            // move back iterator to second found value
            // return final value once iterator - string.length equals pattern's length
            var currentWindow = iterator - start_index;
            console.log(start_index)
            if (currentWindow < minWindowLength) {
                minWindowLength = currentWindow;
                substring = strinArray.slice(start_index, iterator + 1)
            }
            //reset
            patternMap = createHashMap(pattern);
            store_index = true;
            count = 0;
            // shift


            iterator = window_shift_index - 1;
        }
        iterator++;
    }
    return substring.join("");
    // }
    // return {
    //     start: min_window_index,
    //     end: max_window_index,
    //     min_window: max_window_index - min_window_index
    // };
}

var h = getWindow("geeksforgeeks", "ork");
h


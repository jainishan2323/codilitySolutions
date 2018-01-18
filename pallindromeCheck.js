function createPallindrome(string) {
    var pallindrome = string;
    let count = 0;
    while (!isPalindrome(pallindrome)) {
        console.log(pallindrome);
        pallindrome = pallindrome.charAt(pallindrome.length -1 - count) + pallindrome;
        if (count > string.length) {
            break;
        }
        count++;
    }
    return count;
}

function isPalindrome(string) {
    if (string.split("").reverse().join("") === string) {
        return true;
    }
    return false;
}

var k = createPallindrome("ABC");
k

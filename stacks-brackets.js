checkBrackets = (S) => {
    let refernceStack = [];
    for (let i=0; i<S.length; i++) {
        if (S.charAt(i) === '{' || S.charAt(i) === '[' || S.charAt(i) === '(') {
            refernceStack.push(S.charAt(i))
        } else {
            if (isMatchingPair(refernceStack.pop(), S.charAt(i)) === 0) {
                return false;
            }
        }
    }
    if (refernceStack.length > 0) return false;
    return true;
}

isMatchingPair = (openingBracket, closingBracket) => {
    if (openingBracket === '{' && closingBracket === '}' )
        return 1;
    if (openingBracket === '(' && closingBracket === ')' )
        return 1;
    if (openingBracket === '[' && closingBracket === ']' )
        return 1
    return 0
}
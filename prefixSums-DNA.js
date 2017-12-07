function getLowestQuery(S, P, Q) {
    const dnaArray = S.split(""); // takes O(M) M=S.length
    const queryArray = [];
    if (P.length !== Q.length) {
        return -1;
    }
    for (let i=0; i<P.length; i++) {
        let minVal = findMinimum(P[i], Q[i], dnaArray);
        queryArray.push(minVal);
    }
    return queryArray;
}

function findMinimum(min, max, dnaArray) {
    let minChar = "T";
    for (var i=min; i<=max; i++) {
        if (dnaArray[i] < minChar) {
            minChar = dnaArray[i];
        }
    }
    return convertChar(minChar);
}

function convertChar(char) {
    switch (char) {
        case "A":
            return 1;
        case "C":
            return 2;
        case "G":
            return 3;
        case "T":
            return 4;
    }
}
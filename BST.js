function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function (value) {
    if (value <= this.value) {
        if (this.left === null) {
            this.left = new BST(value)
        } else {
            this.left.insert(value)
        }
    } else if (value > this.value) {
        if (this.right === null) {
            this.right = new BST(value);
        } else {
            this.right.insert(value);
        }
    }
}

BST.prototype.findMin = function () {
    let minNode = this.left;
    while (minNode.left !== null) {
        minNode = minNode.left
    }
    return minNode.value;
}

BST.prototype.findMax = function (params) {
    let maxNode = this.right;
    while (maxNode.right !== null) {
        maxNode = maxNode.right;
    }
    return maxNode.value;
}

BST.prototype.contains = function (value) {
    if (this.value === value) return true;
    if (value <= this.value) {
        if (!this.left) return false;
        return this.left.contains(value)
    } else if (value > this.value) {
        if (!this.right) return false;
        return this.right.contains(value)
    }
}


var k = new BST(50)
k.insert(30)
k.insert(20)
k.insert(80)
k.insert(83)
k.insert(5)

console.log(k.contains(4))


function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.root = null;
}

LinkedList.prototype.add = function(value) {
    if (this.root === null) {
        this.root = new Node(value);
    } else {
        var node = this.root;
        while (node.next !== null) {
            node = node.next;
        }
        node.next = new Node(value);
    }
}

LinkedList.prototype.sort = function() {
    var arr = [];
    var node = this.root;
    while (node.next !== null) {
        arr.push(node.value);
        node = node.next;
    }
    arr.push(node.value);
    arr = arr.sort((a,b) => a-b);
    this.root = null;
    for (var i=0; i<arr.length; i++) {
        this.add(arr[i])
    }
    return this;
}

var k = new LinkedList();
var j = new LinkedList();
k.add(0);
k.add(2);
k.add(4)
k.add(6);
k.sort();
j.add(1);
j.add(9);
j.add(3);
j.add(7);
j.add(5);
j.add(9);
j.sort();

function MergeLinkedList(L1, L2) {
    var node1 = L1.root;
    var node2 = L2.root;
    var L3 = new LinkedList();
    while (node1.next !== null && node2.next !==null) {
        if (node1.value < node2.value) {
            L3.add(node1.value);
            node1 = node1.next;
        } else if (node1.value > node2.value) {
            L3.add(node2.value);
            node2 = node2.next;
        }
    }
    if (node1.next !== null) {
        while (node1.next !== null) {
            L3.add(node1.value);
            node1 = node1.next;
        }
    }
    if (node2.next !== null) {
        while (node2.next !== null) {
            L3.add(node2.value);
            node2 = node2.next;
        }
    }
    return L3
}

var i =MergeLinkedList(k,j);
i




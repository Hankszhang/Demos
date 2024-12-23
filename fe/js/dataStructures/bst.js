// Implement BinarySearchTree with JS
// Date: 2016-05-03
// Author: Hanks

// Define the Node object
function Node(key){
    this.key = key;
    this.left = null;
    this.right = null;
}

// Define the BST constructor
function BST(){
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.getSize = getSize;
    this.getLeapNodeSize = getLeapNodeSize;
    this.getSides = getSides;
    this.getLevel = getLevel;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
}

function insert(key){
    let newNode = new Node(key);
    if (this.root === null) {
        this.root = newNode;
    }
    else {
        insertNode(this.root, newNode);
    }
}

function insertNode(node, newNode) {
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode;
        }
        else {
            insertNode(node.left, newNode);
        }
    }
    else {
        if (node.right === null) {
            node.right = newNode;
        }
        else {
            insertNode(node.right, newNode);
        }
    }
}

//中序遍历
function inOrder(node){
    if(node !== null){
        inOrder(node.left);
        console.log(node.key);
        inOrder(node.right);
    }
}
//先序遍历
function preOrder(node){
    if(node !== null){
        console.log(node.key);
        preOrder(node.left);
        preOrder(node.right);
    }
}
//后序遍历
function postOrder(node){
    if(node !== null){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.key);
    }
}

function getMin(){
    var currNode = this.root;
    if (currNode) {
        while(currNode.left !== null){
            currNode = currNode.left;
        }
        return currNode.key;
    }
    return null;
}

function getMax(){
    var currNode = this.root;
    if (currNode) {
        while(currNode.right !== null){
            currNode = currNode.right;
        }
        return currNode.key;
    }
    return null;
}
//获得节点个数
//节点个数=左子树节点个数+右子树节点个数+根节点个数
function getSize(node){
    if(node === null){
        return 0;
    }
    return getSize(node.left) + getSize(node.right) + 1;
}
//获得叶子节点的个数
//没有子节点的节点即为叶子节点
function getLeapNodeSize(node){
    if (node === null){
        return 0;
    }
    if (node.left === null && node.right === null){
        return 1;
    }
    return getLeapNodeSize(node.left) + getLeapNodeSize(node.right);
}

//获得边长的个数
//边数 = 节点数 - 1
function getSides(node){
    return getSize(node) - 1;
}

//获得BST的深度
//树的深度为其左/右子树深度的较大值加1
function getLevel(node){
    if (node === null) {
        return 0;
    }
    var ll = getLevel(node.left);
    var rl = getLevel(node.right);
    return (ll >= rl ? ll : rl) + 1;
}

//查找给定值
function find(key){
    return findNode(this.root, key);
}

function findNode(node, key) {
    if (node === null) {
        return null;
    }
    if (key < node.key) {
        return findNode(node.left, key);
    }
    if (key > node.key) {
        return findNode(node.right, key);
    }
    return node;
}

//获取某个子树的最小值所在的节点
function getSmallest(node) {
    if (node.left === null) {
        return node;
    }
    return getSmallest(node.left);
}

//删除给定的节点
function remove(key){
    this.root = removeNode(this.root, key);
}
function removeNode(node, key){
    if (node === null) {
        return null;
    }
    if (key > node.key) {
        node.right = removeNode(node.right, key);
        return node;
    }
    if (key < node.key) {
        node.left = removeNode(node.left, key);
        return node;
    }

    // key === node.key的情况
    //没有子节点的节点
    if (node.left === null && node.right === null) {
        node = null;
        return node;
    };
    //没有左子节点的节点
    if (node.left === null) {
        node = node.right;
        return node;
    }
    //没有右子节点的节点
    if (node.right === null) {
        node = node.left;
        return node;
    }
    // 有两个子节点的节点
    // 用右侧子树中最小节点的键去更新节点的值
    var tempNode = getSmallest(node.right);
    node.key = tempNode.key;
    // 把右侧子树中的最小节点移除
    node.right = removeNode(node.right, tempNode.key);
    return node;
}

// test cases
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.insert(50);
nums.insert(103);
//print("Inorder traversal: ");
inOrder(nums.root);
print("\n");
//print("Preorder traversal: ");
//preOrder(nums.root);
//print("\n");
//print("Postorder traversal: ");
//postOrder(nums.root);
//print("\n");
//
var size = getSize(nums.root);
print("The nodes number of BST: " + size)
var lsize = getLeapNodeSize(nums.root);
print("The leap nodes number of BST: " + lsize)
var side = getSides(nums.root);
print("The sides number of BST: " + side)
var level = getLevel(nums.root);
print("The level of BST: " + level)
//var min = nums.getMin();
//print("The minimum value of the BST is: " + min);
//var max = nums.getMax();
//print("The maximum value of the BST is: " + max);
//
//console.log("Enter a value to search for: ");
//var value = parseInt(readline());
//var found = nums.find(value);
//if (found != null) {
//print("Found " + value + " in the BST.");
//}
//else {
//print(value + " was not found in the BST.");
//}
//

//console.log("Enter a value to remove: ");
//var value = parseInt(readline());
//nums.remove(value);
//inOrder(nums.root);
//print("\n");

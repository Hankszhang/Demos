// Use js to implement the linkedList
// Last-modified: 2016-4-26
// Author: Hanks

// Indicate the node of linkedList
function Node(element){
    this.element = element;
    this.next = null;
}
/*
function LinkedList(){
    this.head = new Node("head");
    this.find = find;
    this.findPrevious = findPrevious;
    this.insertAfter = insertAfter;
    this.remove = remove;
    this.display = display;
}

function find(item){
    var currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function insertAfter(item, newElement){
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
}

function display(){
    var currNode = this.head;
    while(currNode.next !== null){
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

//找到待删除节点的上一个节点
function findPrevious(item){
    var currNode = this.head;
    while(currNode.next !== null && currNode.next.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item){
    var prevNode = this.findPrevious(item);
    //将带删除元素的next指向呆删除元素的下一个元素
    prevNode.next = prevNode.next.next;    
}

// Test Case
var cities = new LinkedList();
cities.insertAfter("head", "Conway");
cities.insertAfter("Conway", "Russellville");
cities.insertAfter("Russellville", "Carlisle");
cities.insertAfter("Carlisle", "Alma");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();*/

//循环链表
function LoopLList(){
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.findPrevious = findPrevious;
    this.insertAfter = insertAfter;
    this.remove = remove;
}

function find(item){
    var currNode = this.head;
    while(currNode.next !== "head" && currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function insertAfter(item, newElement){
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
}
//找到待删除节点的上一个节点
function findPrevious(item){
    var currNode = this.head;
    while(currNode.next.element !== "head" && currNode.next.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item){
    var prevNode = this.findPrevious(item);
    //将带删除元素的next指向呆删除元素的下一个元素
    prevNode.next = prevNode.next.next;    
}

// Solve Joseph Problem with LoopLList.
function kill(n, m){
    var people = new LoopLList();
    people.insertAfter("head", "2");
    for(var i=3;i<=n;i++){
        people.insertAfter((i-1).toString(), i.toString());
    }
    var counter = 1;
    var currNode = people.head;
    while(m != counter && n >= m){
        currNode = currNode.next;
        counter++;
        if(counter == m){
            print(currNode.element + " is killed!");
            people.remove(currNode.element);
            n--;
            currNode = currNode.next;
            counter = 1;
        }
    }
    print("The left man are:")
    while(n>0){
        print(currNode.element);
        currNode = currNode.next;
        n--;
    }
}

kill(40,3);

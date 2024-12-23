// Implement dictionary with js
// Last-modified: 2016-04-27
// Author: Hanks

function Dictionary() {
    this.data = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}
function add(key, value) {
    this.data[key] = value;
}
function find(key) {
    return this.data[key];
}
function remove(key) {
    delete this.data[key];
}
function showAll(){
    /*for(var key in this.data){
        print(key + " -> " + this.data[key]);
    }*/
    //按照属性名给字典排序显示
    //注意：这里必须先将表示字典对象的this保存，否则在回调函数中不能使用
    var ob = this;
    Object.keys(ob.data).sort().forEach(function(key){
        print(key + " -> " + ob.data[key]);
    })
}
//注意这里不能直接用length属性，因为当key为字符串类型时，length属性失效
function count(){
    return Object.keys(this.data).length;
}
function clear(){
    for(key in this.data){
        delete this.data[key];
    }
}
// Test Cases
/*var pbook = new Dictionary();
pbook.add("Hanks","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
print("Number of entries: " + pbook.count());
pbook.showAll();
print("David's extension: " + pbook.find("David"));
pbook.remove("David");
print("Number of entries: " + pbook.count());
pbook.showAll();
pbook.clear();
print("Number of entries: " + pbook.count());*/

// Phonebook Example
function Phonebook(){
    this.data = new Dictionary();
}
Phonebook.prototype = {
    addPhone: function(name, phone){
        this.data.add(name, phone);
    },
    deleteOne: function(name){
        this.data.remove(name); 
    },
    showOne: function(name){
        print(name + "'s phone number: " + this.data.find(name));
    },
    show: function(){
        print("The phonebook contains " + this.data.count() + " items:");
        this.data.showAll();
    },
    clearAll: function(){
        this.data.clear();
        print("All infomation cleared!");
    }
}
function readData(file){
    var arr = read(file).split("\n"),
        data = new Dictionary();
    for(var i=0;i<arr.length-1;i++){
        var info = arr[i].split(" ");
        data.add(info[0], info[1]);
    }
    return data;
}
var phonebook = new Phonebook();
phonebook.data = readData("files/info.txt");
print("All infomation:")
phonebook.show();
putstr("\nEnter your name: ");
var name = readline();
putstr("\nEnter your phone number: ");
var phone = readline();
phonebook.addPhone(name, phone);
phonebook.show();
putstr("\nEnter the name you want to delete: ");
var name = readline();
phonebook.deleteOne(name);
phonebook.show();
putstr("\nEnter the name you want to find: ");
var name = readline();
phonebook.showOne(name);
phonebook.clearAll();

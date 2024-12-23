// Implemement set whit JS
// Date: 2016-05-01
// Author: Hanks

function Set(){
    this.data = [];
    this.add = add;
    this.remove = remove;
    this.contains = contains;
    this.union = union;
    this.size = size;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
}

function add(item){
    if(this.data.indexOf(item) < 0){
        this.data.push(item);
        return true;
    }else{
        return false;
    }
}
function remove(item){
    var pos = this.data.indexOf(item);
    if(pos > -1){
        this.data.splice(pos, 1);
        return true;
    }else{
        return false;
    }
}
function size(){
    return this.data.length;
}
function show(){
    return this.data;
}
//检查一个成员是否属于某个集合
function contains(item){
    if(this.data.indexOf(item)>-1) return true;
    return false;
}
// 并集操作
function union(set){
    var tmpset = new Set();
    for(var i=0; i<this.data.length; i++){
        tmpset.add(this.data[i]);
    }
    for(var i=0; i<set.data.length; i++){
        if(!tmpset.contains(set.data[i])) tmpset.data.push(set.data[i]);
    }
    return tmpset;
}
// 交集操作
function intersect(set){
    var tmpset = new Set();
    for(var i=0; i<this.data.length; i++){
        if(set.contains(this.data[i])) tmpset.add(this.data[i]);
    }
    return tmpset;
}

// 判断是否为某个集合的子集
function subset(set){
    if(this.size() > set.size()) return false;
    return this.data.every(function(item){
        return set.contains(item);
    });
}
// 补集(包含属于一个集合但是不属于另一个集合的成员)操作
function difference(set){
    var tmpset = new Set();
    this.data.forEach(function(item){
        if(!set.contains(item)) tmpset.add(item);
    });
    return tmpset;
}

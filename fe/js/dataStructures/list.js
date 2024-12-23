//define the List datastructure.
//last-modified: 2016-4-24
//Author: Hanks
//the differences between List and array.

function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // use a array to save data.
}
List.prototype = {
    //给列表添加元素
    append: function(element){
        this.dataStore[this.listSize++] = element;
    },
    //查找元素
    find: function(element){
        return this.dataStore.indexOf(element);
    },
    //从列表中删除元素
    remove: function(element){
        var index = this.find(element);
        if(index > -1){
            this.dataStore.splice(index, 1);
            this.listSize--;
            return true;
        }
        return false;
    },
    //获取列表长度
    getLength: function(){
        return this.listSize;
    },
    //显示列表中的元素
    toString: function(){
        return this.dataStore;
    },
    //在给定元素后面插入新元素
    insert: function(element, after){
        var index = this.find(after);
        if(index > -1){
            this.dataStore.splice(index+1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    },
    //清除列表中的所有元素
    clear: function(){
        delete this.dataStore;
        this.dataStore = [];
        this.pos = this.listSize = 0;
    },
    //判断某元素是否在列表中
    contains: function(element){
        if(this.find(element) > -1) return true;
        return false;
    },
    //遍历列表的相关方法
    front: function(){
        this.pos = 0;
    },
    end: function(){
        this.pos = this.listSize-1;
    },
    prev: function(){
        if(this.pos>0) this.pos--;
    },
    next: function(){
        if(this.pos<this.listSize) this.pos++;
    },
    currPos: function(){
        return this.pos;
    },
    moveTo: function(position){
        if(position>=0 && position<this.listSize){
            this.pos = position;
            return this.dataStore[this.pos];
        }
        return false;
    },
    getElement: function(){
        return this.dataStore[this.pos];
    }
}

//test case
//var names = new List();
//names.append("Cynthia");
//names.append("Raymond");
//names.append("Barbara");
//print(names.toString());
//print(names.moveTo(2));
//names.remove("Raymond");
//print(names.toString());


// Film rent system
// read data from disk
function readFilm(file){
    var arr = read(file).split("\n");
    for(var i=0;i<arr.length;i++){
        arr[i] = arr[i].trim();
    }
    return arr;
}
//Customer Class
function Customer(name, movie){
    this.name = name;
    this.movie = movie;
}

// display the movies list and customer list.
function display(list){
    for(list.front();list.currPos()<list.getLength();list.next()){
        if(list.getElement() instanceof Customer){
            print(list.getElement()["name"] + ", " + list.getElement()["movie"]);
        }else{
            print(list.getElement());
        }
    }
}

// check out whether a movie can be rent by a user.
function checkOut(name, movie, movieList, customerList){
    if(movieList.contains(movie)){
        var c = new Customer(name, movie);
        customerList.append(c);
        movieList.remove(movie);
        rentMovieList.append(movie);
        print("Rent Movie List:" + rentMovieList.toString());
    }else{
        print(movie + "is not avilable!")
    }
}

function checkIn(movie, movieList, customerList){
    if(rentMovieList.contains(movie)){
        rentMovieList.remove(movie);
        movieList.append(movie);
    }
}
var movies = readFilm("files/films.txt"),
    movieList = new List(),
    customerList = new List(),
    rentMovieList = new List();
for(var i=0; i<movies.length;i++){
    movieList.append(movies[i]);
}
print("Available movies:\n");
display(movieList);
putstr("\nEnter your name:\t");
var name = readline();
putstr("Which Moive would you like?\t");
var movie = readline();
checkOut(name, movie, movieList, customerList);
print("\nCustomer Rental:");
display(customerList);
print("\nMovies now available\n");
display(movieList);
putstr("Which Moive would you like to give back?\t");
var movie = readline();
checkIn(movie, movieList, customerList);
print("\nMovies now available\n");
display(movieList);

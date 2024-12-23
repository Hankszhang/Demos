//define the Stack datastructure.
//last-modified: 2016-4-25
//Author: Hanks

function Stack(){
    this.data = []; // Save the data
    this.top = 0; //save the position of the top of Stack
    this.push = push;
    this.pop = pop;
    this.peek = peek; 
    this.clear = clear;
    this.getLength = getLength;
}

function push(element){
    this.data[this.top++] = element;
}
function pop(){
    return this.data[--this.top];
}
function peek(){
    return this.data[this.top-1];
}
function clear(){
    this.top = 0;
}
function getLength(){
    return this.top;
}

// Test Case
/*var s = new Stack();
s.push("David");
s.push("Hanks");
s.push("Wade");
print("length:"+s.getLength());
print(s.peek());
print("The popped element is:"+ s.pop());
print(s.peek());
s.push("Cynthia");
print(s.peek());
s.clear();
print("length: " + s.getLength());
print(s.peek());
s.push("Clayton");
print(s.peek());*/

// Example 1 -- Numeral Convertor
/*function numConvert(num, base){
    var s = new Stack();
    do{
        s.push(num % base);
        num = Math.floor(num/base);
    } while(num>0);
    var result = "";
    while(s.getLength()>0){
        result += s.pop();
    };
    return result;
}
var num = 32;
var base = 2;
var newNum = numConvert(num, base);
print(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = numConvert(num, base);
print(num + " converted to base " + base + " is " + newNum);*/

// Exapmle 2 -- Palindrome problem
/*function isPalindrome(word){
    var s = new Stack();
    for(var i=0;i<word.length;i++){
        s.push(word[i]);    
    }
    var rword = "";
    while(s.getLength()>0){
        rword += s.pop();
    }
    if(rword == word) return true;
    return false;
}
var word = "hello";
print(word +" is palindrome?\t"+ isPalindrome(word));
var word = "racecar";
print(word +" is palindrome?\t"+ isPalindrome(word));*/

// Example 3 -- is Bracket matched
/*function isBracketMatch(exp){
    var s = new Stack(),
        index = [];
    for(var i=0;i<exp.length; i++){
        if("(" == exp[i]){
            s.push(exp[i]);
            index.push(i);
        }else if(")" == exp[i]){
            if(s.getLength() > 0){
                s.pop();
                index.pop();
            }else{
                index.push(i);
            }
        }
    }
    if(index.length == 0) return "Matched!";
    return "Miss bracket(s) in: " +index;
}
print(isBracketMatch("2.3+(1-(23/12+(3.1415*0.24)+12)"))*/

// Example 4 -- Candy
/*function candy(input){
    var candy = new Stack(),
        tmp = new Stack();
    for(var i=0;i<input.length;i++){
        candy.push(input[i]);
    }
    while(candy.getLength()>0){
        var popped = candy.pop();
        if(popped !== 'y'){
            tmp.push(popped);
        }
    }
    var output = "";
    while(tmp.getLength()>0){
        output += tmp.pop();
    }
    return output;
}
var input = "rrryyywwyyyrwywy";
print("Original candies: " + input)
print("Candies without yellow: " + candy(input));*/

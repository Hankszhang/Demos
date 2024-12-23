//This method is used for init a 2d matrix.
// Last modified: 2016-4-23
// Author: Hanks
Array.matrix = function(rows,cols, initial){
    var arr = [];
    for(var i=0;i<rows;i++){
        var columns = [];
        for(var j=0;j<cols;j++){
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}
//test case
/*
var nums = Array.matrix(5,5,1);
for(var i=0; i<nums.length;i++){
    print(nums[i]);
}
*/

//A object to save the grade of students and calculate its average.
//Last modified: 2016-4-23
//Author: Hanks
/*
function Grade(){
    this.gradeSheet = [];
    this.add = add;
    this.average = average;
}
function add(grade){
    this.gradeSheet.push(grade);
}
function average(gradeArr){
    var total = 0;
    for(var i=0;i<gradeArr.length;i++){
        total += gradeArr[i];
    }
    return (total/gradeArr.length).toFixed(2);
}
var grade = new Grade();
grade.add([80,81,82,83]);
grade.add([82,81,82,83]);
grade.add([83,83,87,83]);
print(grade.average(grade.gradeSheet[0]));
print(grade.average(grade.gradeSheet[1]));
*/

/*
var words = ["this","good","apple","pearl","duck","tree"];
words.sort();
words.reverse();
for(var i=0;i<words.length;i++){
    print(words[i]);
}

function Word(){
    this.alphabet = [];
    this.add = add;
    this.combine = combine;
}
function add(a){
    this.alphabet.push(a);
}
function combine(){
    return this.alphabet.join("");
}
var test  = new Word();
test.add("l");
test.add("i");
test.add("n");
test.add("u");
test.add("x");
print(test.combine());
*/

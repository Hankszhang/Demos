// Implement binary search algorithm
// Date: 2016-05-06

function binSearch(arr, data) {
    var upperBound = arr.length-1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        print(" 当前的中点：" + mid);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

//Test cases
var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
nums.sort();
print(nums);
putstr(" 输入一个要查找的值：");
var val = parseInt(readline());
var retVal = binSearch(nums, val);
if (retVal >= 0) {
    print(" 已找到 " + val + " ，所在位置为：" + retVal);
}
else {
    print(val + " 没有出现在这个数组中。");
}

// Serveral kinds of sort-algorithm
// 2018-05-13

// utils
function swap (array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

function print (string) {
    console.log(string);
}


// 冒泡排序，时间复杂度为O(n^2)，最好为O(n)
function bubbleSort(array) {
    let length = array.length;
    for (let i = length - 1; i >= 2; i--) {
        for (let j = 0; j <= i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}

// 选择排序，时间复杂度为O(n^2)
// 从头开始依次将后面的最小元素与当前元素互换
function selectionSort(array){
    for(let i = 0; i < array.length - 1; i++){
        let min = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        if (array[i] > array[min]) {
            swap(array, i, min);
        }
    }
}

// 插入排序，时间复杂度为O(n^2)，最好为O(n)
// 假定第i项之前已经排好序，将第i+1项插入到已经排好序的数组中的合适位置
function insertionSort(array){
    for(let i = 1; i < array.length - 1; i++){
        let temp = array[i];
        let j = i;
        //将比当前元素大的元素向后移一位
        while(j > 0 && (array[j-1] >= temp)){
            array[j] = array[j-1];
            j--;
        }
        //将当前元素插入到移出的空位
        array[j] = temp;
    }
}

// 希尔排序，时间复杂度为O(nlogn)，最好为O(n)
// 希尔排序基于插入排序，通过使用不同的间隔来提高效率
// 希尔排序的关键在于gap序列的选择：https://zh.wikipedia.org/wiki/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F
function shellSort(array){
    const length = array.length;
    let gap = Math.floor(length / 2);
    for(gap; gap > 0; gap = Math.floor(gap / 2)) {
        // 从数组第gap个元素开始分组比较
        for(let i = gap; i < length; i++) {
            let temp = array[i];
            let k = i - gap;
            // 每个元素与自己组内的数据进行插入排序
            while(k >= 0 && array[k] > temp) {
                array[k + gap] = array[k];
                k -= gap;
            }
            array[k + gap] = temp;
        }
    }
}

// 归并排序，时间复杂度为O(nlogn)
// 分而治之的思想
function mergeSort(array) {
    const LEN = array.length;
    if (LEN === 1) {
        return array;
    }

    let mid = Math.floor(LEN / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, LEN);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let ret = [];
    // 将小数组按照大小合并
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            ret.push(left.shift());
        }
        else {
            ret.push(right.shift());
        }
    }
    return ret.concat(left, right);
}

// 快速排序，时间复杂度为O(nlogn)
// 分而治之的思想
function quickSort(array){
    if (array.length == 0) {
        return [];
    }
    var left = [],
        right = [],
        pivot = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

// 快速排序，原地分区版本，减小空间复杂度
function qSort(array) {
    function partition(array, left, right) {
        // index代表下一个可能要交换的位置
        let index = left;
        // 选择最右边的元素为基准元素
        let pivot = array[right];
        for (let i = left; i < right; i++) {
            if (array[i] < pivot) {
                index !== i && swap(array, index, i);
                // 交换位置后，index加1，代表下一个可能要交换的位置
                index++;
            }
        }
        // 将基准元素放置到最后的正确位置上
        swap(array, right, index);
        return index;
    }

    function quick(array, left, right) {
        if (left < right) {
            let index = partition(array, left, right);
            quick(array, left, index - 1);
            quick(array, index + 1, right);
        }
    }

    quick(array, 0, array.length - 1);
    return array;
}

const SIZE = 10000;
let mynums = (new Array(SIZE)).fill(0).map(() => {
    return Math.floor((Math.random()) * SIZE);
});

// Test cases for basic sorting algorithm
let array1 = [...mynums];
let start = new Date().getTime();
bubbleSort(array1);
let stop = new Date().getTime();
print("Sorted by bubble algorithm:");
print("Time used: " + (stop - start));

let array2 = [...mynums];
start = new Date().getTime();
selectionSort(array2);
stop = new Date().getTime();
print("Sorted by selection algorithm:");
print("Time used: " + (stop - start));

let array3 = [...mynums];
start = new Date().getTime();
insertionSort(array3);
stop = new Date().getTime();
time = stop - start;
print("Sorted by insertion algorithm:");
print("Time used: " + (stop - start));

let array4 = [...mynums];
start = new Date().getTime()
shellSort(array4);
stop = new Date().getTime();
time = stop - start;
print("Sorted by shellSort algorithm:");
print("Time used: " + (stop - start));

let array5 = [...mynums];
start = new Date().getTime()
mergeSort(array5);
stop = new Date().getTime();
print("Sorted by mergeSort algorithm:");
print("Time used: " + (stop - start));

let array6 = [...mynums];
start = new Date().getTime()
qSort(array6);
stop = new Date().getTime();
print("Sorted by quickSort algorithm:");
print("Time used: " + (stop - start));

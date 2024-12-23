function getCombo (arr, sum, count) {
    let ret = [];
    // 获得比sum小的所有数值
    const candidates = arr.filter(val => val <= sum);
    if (candidates.length < count) {
        return ret;
    }

    let length = candidates.length;
    let COUNT = count;
    let tmp = [];

    function combination (arr, sum, count, start, tmp) {
        if (sum === 0) {
            if (tmp.length === COUNT) {
                ret.push([...tmp]);
            }
            return;
        }
        if (start > length - 1 || count === 0) {
            return;
        }

        for(let i = start; i < candidates.length; i++) {
            const item = candidates[i];
            tmp.push(item);
            combination(arr, sum - item, count - 1, i + 1, tmp);
            tmp.pop();
        }
    }

    combination(arr, sum, count, 0, tmp);

    return ret;
}

function test (arr, sum, count) {
    const result = getCombo(arr, sum, count);
    console.log('Array: ', arr.toString(), ' Sum: ', sum, ', count: ', count);
    console.group('Combinations:')
    result.forEach(item => console.log(item));
    console.groupEnd();
}

const testArray1 = [3, 5, 8, 7, 4, 9, 10, 6, 1, 2];

test(testArray1, 9, 3);



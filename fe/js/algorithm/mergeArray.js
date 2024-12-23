function mergeArray(arrs) {
    let ret = [];
    let tmp = [];
    let min = null;
    let minIndex = 0;

    arrs.filter(arr => {
        return !!arr.length;
    })

    while(arrs.length) {
        arrs.ForEach((arr, index) => {
            if (index === 0 && arr.length && arr[0] < min) {
                min = arr[0];
                minIndex = index;
            }
        });

        ret.push(arr[minIndex].pop());
        if (arr[minIndex].length === 0 ) {
            arrs.splice(minIndex, 1);
        }
    }

    return ret;
}
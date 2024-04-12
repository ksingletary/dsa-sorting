console.log(quickSort([2,1,4,3,5]));


function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}


module.exports = quickSort;
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    // Initialize the array of arrays for iterative merging
    let sorted = array.map((element) => [element]);
  
    // Iteratively merge subarrays
    for (let size = 1; size < array.length; size *= 2) {
      for (let leftStart = 0; leftStart < array.length; leftStart += 2 * size) {
        let leftEnd = Math.min(leftStart + size, array.length); //setting endpoint for left array
        let left = sorted[leftStart];
        let right = sorted[leftEnd] || [];
  
        // Merge two sorted subarrays
        sorted[leftStart] = merge(left, right);
  
        // Clean up the right array to save memory
        if (leftEnd < array.length) {
          sorted[leftEnd] = [];
        }
      }
    }
  
    return sorted[0];
  }

module.exports = { merge, mergeSort};
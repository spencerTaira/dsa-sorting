"use strict";

/**
 * Given two sorted arrays, function will return a new array with values from
 * both arrays sorted
 *
 *  Input: (arr1, arr2) - (Array of values, Array of values)
 *  Output: sorted array of values
 */
function merge(arr1, arr2) {
  let leftIdx = 0;
  let rightIdx = 0;
  const sortedArr = [];

  while (leftIdx < arr1.length && rightIdx < arr2.length) {
    console.log('leftIdx', leftIdx, 'rightIdx', rightIdx);
    if (arr1[leftIdx] > arr2[rightIdx]) {
      sortedArr.push(arr2[rightIdx]);
      rightIdx += 1;
    } else {
      sortedArr.push(arr1[leftIdx]);
      leftIdx += 1;
    }
  }

  return sortedArr.concat(arr1.slice(leftIdx), arr2.slice(rightIdx));
}

/**
 * Given an array, function will return a new array with values sorted from
 * smallest to largest
 *
 *  Input: vals - Array of values
 *  Output: sortedVals - Array of sorted values (small -> large)
 */
function mergeSort(vals) {
  if (vals.length <= 1) {
    return vals;
  }

  const middle = Math.floor(vals.length / 2);
  const left = mergeSort(vals.slice(0, middle));
  const right = mergeSort(vals.slice(middle));

  return merge(left, right);
}

module.exports = { merge, mergeSort};
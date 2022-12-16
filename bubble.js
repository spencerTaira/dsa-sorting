"use strict";

/**
 *  Given an array, bubblesort will sort the values in the array (smallest to largest)
 *
 *  Input: vals - array of vals
 *  Output: vals - same array as input but sorted
 */

function bubbleSort(vals) {

  for (let i = vals.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (vals[j] > vals[j+1]) {
        [vals[j], vals[j+1]] = [vals[j+1], vals[j]];
      }
    }
  }

  return vals;
}

module.exports = bubbleSort;
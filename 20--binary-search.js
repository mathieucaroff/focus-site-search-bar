"use strict";

/**
 * Performs a binary search, with the given comparison function.
 * 
 * @param sortedHayStack Array or Indexable, must be sorted.
 * @param needle Element whose insertion position is desired.
 * @param comparisonFunction: Function
 * * @description Compares two Elements of the array
 * * @param A An array element
 * * @param B An array element
 * * @returns a number of the same sign as A - B as if they were numbers.
 * @returns The insertion position for the needle in the hayStack, which is to say, the index where it should lie,
 * *       shifting the following elements by one. If the needle is in the haystack, it's postion will be returned.
 */
let binarySearch = function(sortedHayStack, needle, comparisonFunction) {

    // Binary find the insert position
    let insertionPosition = null;
    let low = 0;
    let high = sortedHayStack.length - 1 + 1;
    let half;
    let comparison;
    let infiniteLoop = 0;
    while (insertionPosition === null) {
        half = (low + high) >> 1;
        comparison = comparisonFunction(needle, sortedHayStack[half]);
        if (comparison > 0) {
            low = half + 1;
        } else if (comparison < 0) {
            high = half - 1 + 1;
        } else if (comparison == 0) {
            insertionPosition = half;
        } else {
            error("Something strange #code-ref(706987)");
        }
        if (insertionPosition === null && low >= high) {
            insertionPosition = high;
        }
        if (infiniteLoop++ > 10000) {
            error("Infinite loop (>10000) #code-ref(102802)");
        }
    }
    

    // Go to the lowest insert position
    while (
        insertionPosition >= 0
        && comparisonFunction(needle, sortedHayStack[insertionPosition]) <= 0
    ) {
        insertionPosition -= 1;
    }
    insertionPosition += 1;
    return insertionPosition;
};

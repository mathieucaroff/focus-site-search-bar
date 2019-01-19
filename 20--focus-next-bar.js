"use strict";

/**
 * Get the first search input following the given element (or null).
 * 
 * @param referenceElement The "given" element
 * @returns The wanted text input element (or null)
 */
let getNextTextInput = function(referenceElement, backward) {
    let inputCandidates = getEligibleTextInputs();
    let insertionPosition = binarySearch(inputCandidates, referenceElement, nodePositionCompare);
    // ^ Lowest possible position
    let l = inputCandidates.length;
    let i;
    if (l == 0) {
        return null;
    }
    if (backward) {
        i = (insertionPosition - 1 + l) % l;
    } else {
        i = insertionPosition % l;
        if (inputCandidates[i] == referenceElement) {
            i = (i + 1) % l;
        }
    }
    return inputCandidates[i];
};

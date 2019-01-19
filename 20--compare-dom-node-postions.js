"use strict";

/**
 * Compare two DOM nodes by their position in the page (their order of appearance).
 * 
 * @param A DOM Node to compare
 * @param B DOM Node to compare
 * @returns 1 if a comes after b, -1 if a comes before b, 0 otherwise (usually because a == b).
 */
let nodePositionCompare = function(a, b) {
    if (a === undefined || a === null) {
        error("Undefined or null argument value #code-ref(410385)");
    }
    let positionInformation = b.compareDocumentPosition(a);
    if (positionInformation & Node.DOCUMENT_POSITION_FOLLOWING) {
        // a comes after b
        return 1;
    } else if (positionInformation & Node.DOCUMENT_POSITION_PRECEDING) {
        // a comes before b
        return -1;
    } else {
        return 0;
    }
};
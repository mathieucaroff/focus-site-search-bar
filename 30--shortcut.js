"use strict";

/**
 * Checks the given (keyboard) event for Ctrl(+Shift)+Y or Ctrl(+Shift)+D
 * 
 * @param ev The event to check
 * @implements Event checking
 */
let kbEventMatches = function(ev) {
    let matching = ev.key == "y" || ev.key == "Y";
    matching |= ev.key == "d" || ev.key == "D";
    matching &= !!ev.ctrlKey; // (!!) is not(not()) -- it casts to (bool).
    return matching;
};
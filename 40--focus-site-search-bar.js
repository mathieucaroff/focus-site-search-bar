"use strict";

/**
 * @author Mathieu CAROFF
 * 
 * @description
 * Upon Ctrl(+Shift)+Y event, jump to next (or previous) text input element.
 * Also works with Ctrl(+Shift)+D.
 * 
 * @license Unlicense
 * @license (CC0)
 * @license Public-domain
 * 
 * The three above licenses are the same.
 */

/**
 * Jump to next (or previous) text input element.
 * 
 * @param backward Whether or not the jump should be backward.
 * @implements Jumping to the correct element
 */
let jumpToTextInput = function(firstJump, backward) {
    let reference = document.activeElement;
    if (firstJump) {
        reference = document.head;
    }
    let input = getNextTextInput(reference, backward);
    input.focus(); // Unnecessary
    input.select();
};

/**
 * Checks the event using the function `matching` then jumps using `jump`.
 * 
 * @param ev The event to check for execution
 * @implements Event handling
 */
let firstJump = true;
let mainKeyboardHandler = function(ev) {
    if (kbEventMatches(ev)) {
        ev.preventDefault();
        let backward = ev.shiftKey;
        jumpToTextInput(firstJump, backward);
        firstJump = false;
    }
};

/* Register the keyboard handler */
document.body.addEventListener("keydown", mainKeyboardHandler, true);

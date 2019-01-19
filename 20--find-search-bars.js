let isVisible = notlogged("isVisible", function(element) {
    return element.offsetParent !== null;
});

let isFocusable = notlogged("isFocusable", function(element) {
    let initialFocus = document.activeElement;
    element.focus();
    let elementIsFocusable = document.activeElement == element;
    initialFocus.focus();
    return elementIsFocusable;
});

/**
 * Query for a set of focusable, visible html element(s) mathing a query
 * pattern.
 * 
 * @returns
 *      The matched elements as an array of elements. Returns an empty array if
 *      no query matched any element.
 */
let getEligibleTextInputs = function() {
    let queries = [
        [
            "input[type='search']",
            "input[inputmode='search']",
            "input[type='text'][class*='search']",
            "input[type='text'][class*='Search']",
            "input:not([type])[class*='search']",
            "input:not([type])[class*='Search']",
            "input[type='text'][placeholder*='Search']",
            "input[type='text'][placeholder*='search']",
            "input:not([type])[placeholder*='Search']",
            "input:not([type])[placeholder*='search']",
        ].join(","),
        "input[type='text'],input:not([type])",
        "textarea,input[type='email'],input[type='url']"
    ];
    let inputs = [];
    for (let q of queries) {
        let selection = Array.from(document.querySelectorAll(q));
        inputs = selection.filter(e => isVisible(e) && isFocusable(e));
        if (inputs.length > 0) {
            break;
        }
    }
    return inputs;
};
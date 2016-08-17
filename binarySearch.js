
/** Returns the array index of the element if found else -1
*/
'use strict';
function seachBinary(a, arr) {
    var min = 0;
    var max = arr.length - 1;
    var i;
    var val;

    while (min <= max) {
        i = Math.floor((min + max) / 2);
        console.log(i);
        val = arr[i];

        if (val < a) {
            min = i + 1;
        }
        else if (val > a) {
            max = i - 1;
        }
        else if (val == a) {
            return i;
        }
    }

    return -1;
}

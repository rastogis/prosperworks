
/** Returns the array index of the element if found else -1
*/

'use strict';

function iterativeBinarySearch(a, arr) {
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
            return true;
        }
    }

    return false;
}

function recursiveBinarySearch(a, arr, min, max) {
  if(!min) min=0;
  if(!max) max = arr.length-1;

  if (min > max) return false;
     var i = Math.floor((min + max)/2);
     if (arr[i] == a) return true;
     else if (arr[i] < a)
        return recursiveBinarySearch(a, arr, i+1, max);
     else
        return recursiveBinarySearch(a, arr, min, i-1);
}

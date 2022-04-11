let haystack = "mississippi";
let needle = "is";
var strStr = function (haystack, needle) {

    if (!needle.length) {
        return 0
    }

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack[i] === needle[0]) {
            for (var j = 0; ; j++) {
                if (j == needle.length) {
                    return i;
                }
            }
        } else if (haystack[i + j] !== needle[j]) {
            break;
        }
    }
    return -1
};

console.log(strStr(haystack, needle))
var romanToInt = function (s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let result = 0;
    s = s.split('');
    for (i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            if (s[i + 1] === 'V') {
                result += 4;
                ++i
            }
            else if (s[i + 1] === 'X') {
                result += 9;
                ++i
            }
            else result += roman[s[i]]
        }
        else if (s[i] === 'X') {
            if (s[i + 1] === 'L') {
                result += 40;
                ++i
            }
            else if (s[i + 1] === 'C') {
                result += 90;
                ++i
            }
            else result += roman[s[i]]
        }
        else if (s[i] === 'C') {
            if (s[i + 1] === 'D') {
                result += 400;
                ++i
            }
            else if (s[i + 1] === 'M') {
                result += 900;
                ++i
            }
            else result += roman[s[i]]
        }
        else result += roman[s[i]]

    }
    return result
};
console.log(romanToInt("XIIII"))
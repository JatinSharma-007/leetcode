var isValid = function (s) {
    let queue = [];
    for (let i = 0; i < s.length; i++) {
        let first = s[i];
        let last = queue[queue.length - 1];
        if (first === ")" && last === "(") {
            queue.pop();
        } else if (first === "}" && last === "{") {
            queue.pop();
        } else if (first === "]" && last === "[") {
            queue.pop();
        } else {
            queue.push(first);
        }
    }
    return !queue.length;
};


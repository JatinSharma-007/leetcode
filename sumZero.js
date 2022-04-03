let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
let target = 0;

const checkSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
}
console.log(checkSum(arr, target)); 
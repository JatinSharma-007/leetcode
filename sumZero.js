// o(n^2) quadratic time complexity     
let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
const checkSum = (arr) => {  
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}   
    
// o(n)
const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
console.log(sumZero(arr))  

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

var mergeTwoLists = function (list1, list2) {
    return list1.concat(list2).sort()
};
console.log(mergeTwoLists(list1, list2))
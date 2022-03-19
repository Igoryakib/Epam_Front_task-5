const getSum = (num1, ...args) => {
    let result = 0;
    let sum = 0;
    args.map(item => sum += item);
    result = sum * num1
    return result;
};
console.log(getSum(5, 2, 2, 2));

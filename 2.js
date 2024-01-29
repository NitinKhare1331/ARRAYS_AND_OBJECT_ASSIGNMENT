const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sorted_arr = ages.sort();
console.log(`Sorted arr ${sorted_arr}`);
let sum_arr = ages.reduce((a,b)=>a+b);
let average = sum_arr/ages.length
console.log(`avg age = ${average}`);
let range_of_ages = (sorted_arr[9]-sorted_arr[0]);
console.log(`Range of ages: ${range_of_ages}`);
let comparison = (Math.abs((sorted_arr[0]-average)) === (sorted_arr[9]-average));
console.log(`Comparison: ${comparison}`);


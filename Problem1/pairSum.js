function pairSum(arr, target) {
    // your code here

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            //jika arr i + arr j sama dengan target yang kita ingin jumlahkan di 
            // arraynya
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }

  }
   
//   console.log(pairSum([1, 2, 3, 4, 6], 6)) // [1, 3]
//   console.log(pairSum([2, 5, 9, 11], 11))  // [0, 2]
//   console.log(pairSum([1, 3, 5, 7], 12))   // [2, 3]
//   console.log(pairSum([1, 4, 6, 8], 10))   // [1, 2]
//   console.log(pairSum([1, 5, 6, 7], 6))    // [0, 1]

module.exports = pairSum;

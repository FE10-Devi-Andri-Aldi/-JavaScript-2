const { moduleExpression } = require("@babel/types");

function cetakTablePerkalian(number) {
    
    let result = '';
    for (let i=1; i <= 9; i++){ // looping pertama buat row = Perkalian untuk kebawah
        for(let j=1; j <= 9; j++){ // looping kedua buat col = Perkalian untuk kesamping
            if ((i * j) < 10) { // jika i kali j < dari 10
                result += (i * j) + '   '
            } else {
                result += (i * j) + '  '
            }
        }
        result +="\n"
    }
return result
}
// console.log(cetakTablePerkalian(9))

module.exports = cetakTablePerkalian;
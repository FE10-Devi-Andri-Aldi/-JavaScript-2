function makeDiamond(char) { // ini untuk bagian atas diamond
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] // index ke 2
    let tes = alphabet.indexOf(char); // kalau dia C, maka row yang terbentuk. mendapatkan index adalah index dikali 2 + 1 artinya 2X 2+1
    let teks = '';
    let potition = []; // posisiini mempunyai dua value positition satu dan dua.
    let potition1 = tes // posisi ditengah
    let postiton2 = tes; // buat si B karna dia 2 posisi dicetak bakal nge + si alphabet
    potition.push(potition1, postiton2) // untuk ngepush potition 1 dan 2 agar masuk ke position utama
    // let postiton3 = tes -3; // buat posisi si C
 

    
    for (let i = 0; i < (tes * 2) + 1; i++) { // mendapatkan index adalah index dikali 2 + 1 artinya 2X 2+1 => index kex berapa 2 dan satu itu adalah si C
        // console.log(i) // ini untuk rownya = kebawah
        for (let j = 0; j < (tes * 2) + 1; j++) { // ini col nya
            if(i === 0 || i === (tes*2)){
                if(j === tes){ // mksdnya huruf A ada ditengah2 secara horizontal
                teks+= `${alphabet[0]}` // huruf pertama dari kamus alphabet yg dicetak A.
                } else {
                teks+='.'
                }
                potition[0] += 1 //posisi kanan si huruf yang dicetak B
                potition[1] -= 1 // posisi kiri huruf yang dicetak B
            } else {
                teks += '.'
            } 
            
            // if (i === 1 || i === tes *2 -1){ // untuk si B bawah
            //     if ( j === potition[0] || j === potition[1]){
            //         teks += `${alphabet[1]}` // buat si B
            //     }
            //     else {
            //         teks += '.'
            //     }
            //     potition[0] += 2 //posisi kanan si huruf yang dicetak C
            //     potition[1] -= 2 // posisi kiri huruf yang dicetak C
            // } else {
            //     teks += '.'
            // }
        }
        teks += '\n';
    }

    console.log(teks)

    // console.log (tes) 
}




makeDiamond('C') //




const Angka = (value) => {
    let hasil;
    if(value >= 90) {
        hasil = 'A'
    } else if(value >= 80 && value <= 89) {
        hasil = 'B'
    } else if(value >= 70 && value <= 79) {
        hasil = 'C'
    } else if(value >= 60 && value <= 69) {
        hasil = 'D'
    } else if(value <= 59) {
        hasil = 'E'
    }
    return hasil
}

const result = Angka(60)
console.log(result)
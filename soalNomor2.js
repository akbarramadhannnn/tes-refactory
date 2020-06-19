const Angka = (value) => {
    let hasil;
    if(value % 2 == 0) {
        hasil = "angka "+value+" adalah bilangan genap";
    } else {
        hasil = "angka "+value+" adalah bilangan ganjil";
    }
    return hasil
}

const result = Angka(13)
console.log(result)
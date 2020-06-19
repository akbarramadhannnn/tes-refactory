const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Angka = (value) => {
    const deretanAngka = value.toString()
    const maksimum = Math.max.apply(Math, value)
    const minimum = Math.min.apply(Math, value)
    let total = 0;
    const banyakNumber = value.length;
    for(var i = 0; i < value.length; i++){
        total += value[i]
    }
    console.log('Dertan Angka : ', deretanAngka)
    console.log('Maksimum : ', maksimum)
    console.log('Minimum : ', minimum)
    console.log('Rata - Rata : ', (total/banyakNumber))
}

Angka(number)
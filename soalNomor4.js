const cekPalindrom =  (param) => {
    let x = param.length
    let y = '';
	while(x > 0){
		y += param[x - 1];
		x--;
	}
	return y;
}

var kalimat = "kasur";
if(kalimat === cekPalindrom(kalimat)){
	console.log("Kalimat `"+kalimat+"` termasuk kata Palindrom");
}
else{
	console.log("Kalimat `"+kalimat+"` bukan kata Palindrom");
}

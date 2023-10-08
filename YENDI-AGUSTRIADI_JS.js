// if, else, dan nested if
let suhu = 25;

if (suhu >= 30) {
    console.log("Suhu sangat panas.");
} else if (suhu >= 25) {
    console.log("Suhu hangat.");
} else if (suhu >= 16) {
    console.log("Suhu sejuk.");
} else {
    console.log("Suhu sangat dingin.");
}

// switch case
let pilihan = "B";

switch (pilihan) {
    case "A":
        console.log("Anda memilih opsi A.");
        break;
    case "B":
        console.log("Anda memilih opsi B.");
        break;
    case "C":
        console.log("Anda memilih opsi C.");
        break;
    case "D":
        console.log("Anda memilih opsi D.");
        break;
    default:
        console.log("Pilihan tidak valid.");
}


// for statement
for (let angka = 0; angka < 14; angka += 2) {
    console.log("Angka genap: " + angka);
}

// while
let total = 0;
let angka = 1;

while (angka <= 10) {
    total += angka;
    angka++;
}

console.log("Total dari 1 hingga 10 adalah: " + total);

// do while
let kata = "";
let panjangKata = 0;

do {
    kata += "a";
    panjangKata++;
} while (panjangKata < 5);

console.log("Hasil kata: " + kata);

// function
function tambah(angka1, angka2) {
    return angka1 + angka2;
}

let hasilPenambahan = tambah(6, 4);
console.log("Hasil penambahan: " + hasilPenambahan);

function kali(angka1, angka2) {
    return angka1 * angka2;
}

let hasilPerkalian = kali(8, 4);
console.log("Hasil perkalian: " + hasilPerkalian);


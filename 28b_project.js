let guru = {
    NIP: 24123,
    nama: "Budi Setiawan",
    kelas : ["Matematika", "Pendidikan Kewarganegaraan", "Bahasa Ingriss"],
    alamat: {
        jalan: "Jalan Jawa",
        kelurahan: "Reni",
        kecamatan: "pamulang",
        kota: "Tangerang Selatan"
    }
}

const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question("\n ====What operation do you want to do?==== \n (1). Show Data \n ====Type your option below==== \n ", function (answer) {
    switch (answer) {
        case "1":
            showData()
            rl.close()
            break;
        default:
            console.log("Your option is invalid!");
            rl.close()
            break;
    }
})

function showData() {
    console.log("====Data Details====");
    console.log(`NIP : ${guru.NIP}`);
    console.log(`Nama : ${guru.nama}`);
    console.log(`Departemen : ${guru.kelas}`);
    console.log(`Alamat : `);
    console.log(
    `
    Jalan : ${guru.alamat.jalan}
    Kelurahan : ${guru.alamat.kelurahan}
    Kecamatan : ${guru.alamat.kecamatan}
    Kota : ${guru.alamat.kota}
    `);
}

// let departemen = ["Accounting", "Marketing", "IT Specialist", "Customer Service"]
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

let karyawan = {
    NIP: 2140212,
    nama: "Amir Mahmud",
    alamat: "Reni Jaya",
    departemen: "Accounting"
}

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
    console.log(`NIP : ${karyawan.NIP}`);
    console.log(`Nama : ${karyawan.nama}`);
    console.log(`Departemen : ${karyawan.departemen}`);
    console.log(`Alamat : ${karyawan.alamat}`);
}

// function addData(key, value) {
//     var newData = Object.assign({}, karyawan, {key, value})
// }


// var ongoingTransaction = true

/* 
  Author: zikrimansyursyah
  
  Case : anda diminta untuk membuat fungsi yang dapat menghitung total saldo akhir, transaksi terbanyak kredit atau debit, dan transaksi perbulan

  Example Input: (data pada variabel transactions)

  Expected Output: 
  - Total Saldo Akhir : 310
  - Transaksi Terbanyak : debit
  - Total Transaksi Januari : 300

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .reduce() .filter() dll
  - tampilkan expected output dengan console.log()
*/

function totalSaldo(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  let jumlah = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].jenis === "debit") {
      jumlah += transactions[i].jumlah;
    } else {
      jumlah -= transactions[i].jumlah;
    }
  }

  if (jumlah < 0) {
    jumlah *= -1;
  }
  return jumlah; // kembalikan hasil logika disini
}

function transaksiTerbanyak(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini

  let jumlahDebit = 0;
  let jumlahKredit = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].jenis === "debit") {
      jumlahDebit += transactions[i].jumlah;
    } else {
      jumlahKredit += transactions[i].jumlah;
    }
  }

  if (jumlahDebit > jumlahKredit) {
    return "debit";
  }
  return "kredit"; // kembalikan hasil logika disini
}

function totalTransaksiBulan(transactions, targetBulan) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  const bulanNama = [
    { nama: "Januari", nomor: "01" },
    { nama: "Februari", nomor: "02" },
    { nama: "Maret", nomor: "03" },
    { nama: "April", nomor: "04" },
    { nama: "Mei", nomor: "05" },
    { nama: "Juni", nomor: "06" },
    { nama: "Juli", nomor: "07" },
    { nama: "Agustus", nomor: "08" },
    { nama: "September", nomor: "09" },
    { nama: "Oktober", nomor: "10" },
    { nama: "November", nomor: "11" },
    { nama: "Desember", nomor: "12" },
  ];
  let nomorBulan = "";
  for (let i = 0; i < bulanNama.length; i++) {
    if (bulanNama[i].nama === targetBulan) {
      nomorBulan = bulanNama[i].nomor;
    }
  }
  let jumlah = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].tanggal.split("-")[1] == nomorBulan) {
      jumlah += transactions[i].jumlah;
    }
  }

  return jumlah; // kembalikan hasil logika disini
}

// CASE VALUE
const transactions = [
  { tanggal: "2023-01-05", jumlah: 200, jenis: "debit" },
  { tanggal: "2023-01-10", jumlah: 100, jenis: "kredit" },
  { tanggal: "2023-02-15", jumlah: 150, jenis: "debit" },
  { tanggal: "2023-03-20", jumlah: 300, jenis: "kredit" },
  { tanggal: "2023-03-22", jumlah: 50, jenis: "debit" },
  { tanggal: "2023-04-10", jumlah: 200, jenis: "kredit" },
  { tanggal: "2023-04-15", jumlah: 100, jenis: "debit" },
  { tanggal: "2023-05-05", jumlah: 150, jenis: "kredit" },
  { tanggal: "2023-05-10", jumlah: 120, jenis: "debit" },
  { tanggal: "2023-06-15", jumlah: 180, jenis: "kredit" },
];

// TEST CASE
console.log("Total Saldo Akhir :", totalSaldo(transactions));
console.log("Transaksi Terbanyak :", transaksiTerbanyak(transactions));
console.log(
  "Total Transaksi Januari :",
  totalTransaksiBulan(transactions, "Januari")
);

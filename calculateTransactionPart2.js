/* 
  Author: zikrimansyursyah
  
  Case : anda diminta untuk membuat fungsi yang dapat menghitung total pendapatan, produk terlaris, dan rata-rata harga produk

  Example Input: (data pada variabel transactions)

  Expected Output: 
  - Total Pendapatan:  5500000
  - Produk Terlaris : Baju
  - Rata-rata Harga Produk : 175000

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .reduce() .filter() dll
  - tampikan expected output dengan console.log()
*/

function totalPendapatan(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  let jumlah = 0;
  for (let i = 0; i < transactions.length; i++) {
    jumlah += transactions[i].harga * transactions[i].jumlah;
  }

  return jumlah; // kembalikan hasil logika disini
}

function produkTerlaris(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  let arrProduk = [
    { produk: "Baju", jumlah: 0 },
    { produk: "Celana", jumlah: 0 },
    { produk: "Sepatu", jumlah: 0 },
    { produk: "Topi", jumlah: 0 },
  ];

  for (let i = 0; i < transactions.length; i++) {
    for (let j = 0; j < arrProduk.length; j++) {
      if (arrProduk[j].produk == transactions[i].produk) {
        arrProduk[j].jumlah += transactions[i].jumlah;
      }
    }
  }

  let produkTerlaris = arrProduk[0];
  for (let i = 0; i < arrProduk.length; i++) {
    if (arrProduk[i].jumlah > produkTerlaris.jumlah) {
      produkTerlaris = arrProduk[i];
    }
  }

  return produkTerlaris.produk; // kembalikan hasil logika disini
}

function rataRataHarga(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  /// masukan logika disini
  let totalHarga = 0;
  for (let i = 0; i < transactions.length; i++) {
    totalHarga += transactions[i].harga;
  }

  let rataRata = totalHarga / transactions.length;
  return rataRata; // kembalikan hasil logika disini
}

// CASE VALUE
const transactions = [
  { tanggal: "2023-01-05", produk: "Baju", jumlah: 5, harga: 150000 },
  { tanggal: "2023-01-10", produk: "Celana", jumlah: 3, harga: 200000 },
  { tanggal: "2023-02-15", produk: "Baju", jumlah: 2, harga: 150000 },
  { tanggal: "2023-03-20", produk: "Sepatu", jumlah: 4, harga: 300000 },
  { tanggal: "2023-03-22", produk: "Topi", jumlah: 6, harga: 50000 },
  { tanggal: "2023-04-10", produk: "Celana", jumlah: 2, harga: 200000 },
  { tanggal: "2023-04-15", produk: "Baju", jumlah: 3, harga: 150000 },
  { tanggal: "2023-05-05", produk: "Sepatu", jumlah: 1, harga: 300000 },
  { tanggal: "2023-05-10", produk: "Topi", jumlah: 4, harga: 50000 },
  { tanggal: "2023-06-15", produk: "Celana", jumlah: 5, harga: 200000 },
];

// TEST CASE
console.log("Total Pendapatan :", totalPendapatan(transactions));
console.log("Transaksi Terbanyak :", produkTerlaris(transactions));
console.log("Rata-rata Harga Produk :", rataRataHarga(transactions));

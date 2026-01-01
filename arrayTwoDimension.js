/* 
  Author: zikrimansyursyah
  
  Case : tugas anda adalah mencari nilai rata rata siswa, nilai rata rata mata pelajaran, dan nilai tertinggi pada mata pelajaran pada data berbentuk array 2 dimensi
  
  Example Data: 
  [
    ["Alice", 85, 90, 78], (pada setiap data terdapat nama yang ditunjukan pada indeks ke-0)
    ["Bob", 92, 88, 95], (nilai mata pelajaran matematika pada indeks ke-1)
    ["Carol", 78, 80, 85], (nilai mata pelajaran bahasa indonesia pada indeks ke-2)
    ["David", 65, 75, 70], (nilai mata pelajaran fisika pada indeks ke-3)
    ["Eve", 88, 82, 90]
  ]

  Expected Output: ["xyz", "xzy", "yxz", "yzx", "zxy", "zyx"]

  Notes: 
  - tampikan expected output dengan console.log()
*/

function nilaiRataRataSiswa(data, nama) {
  // masukan logika disini

  // Inisiasi variable jumlah
  let jumlah = 0;
  let jumlahMapel = data[0].length - 1;

  //Eksplorasi Array
  for (let i = 0; i < 5; i++) {
    if (data[i][0] == nama) {
      for (let j = 1; j < 4; j++) {
        // Jumlahkan semua nilai siswa
        jumlah = jumlah + data[i][j];
      }
    }
  }

  return jumlah / jumlahMapel; // kembalikan hasil logika disini
}

function nilaiRataRataMataPelajaran(data, mapelIndex) {
  // masukan logika disini
  // Inisiasi variable jumlah
  let jumlah = 0;

  //Eksplorasi Array
  for (let i = 0; i < 5; i++) {
    // Jumlahkan semua nilai mata pelajaran berdasarkan mapel index
    jumlah = jumlah + data[i][mapelIndex]; // Jumlahkan semua nilai dari mapel Index
  }
  return jumlah / data.length; // kembalikan hasil logika disini
}

function nilaiTertinggiMataPelajaran(data, mapelIndex) {
  // masukan logika disini
  //Inisialisasi nilai awal
  let tertinggi = data[0][mapelIndex];

  //Eksplorasi Array
  for (let i = 0; i < 5; i++) {
    if (data[i][mapelIndex] > tertinggi) {
      tertinggi = data[i][mapelIndex]; //Ganti nilai pada variabel tertinggi jika ditemukan nilai yang lebih tinggi
    }
  }
  return tertinggi; // kembalikan hasil logika disini
}

// CASE VALUE
const dataNilai = [
  ["Alice", 85, 90, 78],
  ["Bob", 92, 88, 95],
  ["Carol", 78, 80, 85],
  ["David", 65, 75, 70],
  ["Eve", 88, 82, 90],
];

// TEST CASE
console.log(nilaiRataRataSiswa(dataNilai, "David")); // cari nilai rata-rata siswa David
console.log(nilaiRataRataMataPelajaran(dataNilai, 2)); // cari nilai rata-rata mapel bahasa-indonesia dari seluruh siswa
console.log(nilaiTertinggiMataPelajaran(dataNilai, 3)); // cari nilai tertinggi pada mapel fisika dari seluruh siswa`

/* 
  Author: zikrimansyursyah
  
  Case : Tugas anda adalah mencari index suatu elemen dalam array, wajib menggunakan metode binary search 

  metode binary search bekerja dengan membagi array menjadi dua bagian dan memeriksa elemen tengah, kemudian mempersempit pencarian berdasarkan hasil perbandingan. Implementasikan pencarian ini dalam bentuk rekursif
  perlu diingat metode binary search wajib dilakukan sorting terlebih dahulu

  Example Input: [3, 8, 1, 9, 4, 6, 4, 2, 8, 4, 1, 6, 2, 3, 7, 3]
  Example search input: 6
  Example Output: 
  - Indeks elemen 6 adalah :  11
  - Indeks elemen 8 adalah :  13
  - Indeks elemen 3 adalah :  5 
  - Indeks elemen 4 adalah :  7 

  Notes: 
  - dilarang menggunakan array prototype seperti .find() .sort() .findIndex() dll
  - tampikan expected output dengan console.log()
*/

function cariValueIndeks(array, target, left, right, bubblySorted) {
  // kofigurasi parameter sesuai kebutuhan anda
  if (!bubblySorted) {
    // Bubble Sort
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return cariValueIndeks(array, target, 0, array.length - 1, true); // Rekursif dengna tambahan var left,right,dan array yang sudah di sort
  }

  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2); //Bagi 2 array (kiri dan kanan)

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    // Jika mid > target, ambil array kiri
    return cariValueIndeks(array, target, left, mid - 1, true);
  } else {
    // Jika mid < target, ambil array kanan
    return cariValueIndeks(array, target, mid + 1, right, true);
  }
  return; // kembalikan hasil logika disini
}

// CASE VALUE
const array = [3, 8, 1, 9, 4, 6, 4, 2, 8, 4, 1, 6, 2, 3, 7, 3];

// TEST CASE
console.log("Indeks elemen 6 adalah : ", cariValueIndeks(array, 6));
console.log("Indeks elemen 8 adalah : ", cariValueIndeks(array, 8));
console.log("Indeks elemen 3 adalah : ", cariValueIndeks(array, 3));
console.log("Indeks elemen 4 adalah : ", cariValueIndeks(array, 4));

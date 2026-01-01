/* 
  Author: zikrimansyursyah
  
  Case : tugas anda adalah mencari kombinasi unik dari sebuah huruf pada string

  Example Input: xyz

  Expected Output: ["xyz", "xzy", "yxz", "yzx", "zxy", "zyx"]

  Notes: 
  - tampikan expected output dengan console.log()
*/

function cariKataKombinasi(
  string,
  index = 0,
  arr = string.split(""),
  final = new Set()
) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  if (index === arr.length) {
    final.add(arr.join(""));
    return Array.from(final);
  }

  for (let i = index; i < arr.length; i++) {
    // Swap
    [arr[index], arr[i]] = [arr[i], arr[index]];

    // Rekursi ke index berikutnya
    cariKataKombinasi(string, index + 1, arr, final);

    // Swap kembali (backtrack)
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }

  return Array.from(final); // kembalikan hasil logika disini
}

// TEST CASE
console.log(cariKataKombinasi("abc"));
console.log(cariKataKombinasi("zzz"));
console.log(cariKataKombinasi("wow"));
console.log(cariKataKombinasi("cool"));

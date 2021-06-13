// array abjad
const abjad = ["A", "A", "C"];

// fungsi untuk mengubah isi array abjad
const ubahArrayAbjad = (indexMulai, hapusElemen, elemen) => {
  return abjad.splice(indexMulai, hapusElemen, elemen);
};

// menghapus dan mengganti elemen
ubahArrayAbjad(1, 1, "B");

// menambahkan elemen baru
ubahArrayAbjad(3, 0, "D");

// cetak array abjad
console.log(abjad);

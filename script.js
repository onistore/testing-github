alert ("kalau error gunakan mode dekstop")

alert ("rekomendasi donghua bisa DM judulnya ke wa atau discord. insya allah saya akan buat kan jika tidak ada ke sibukan")

alert ("donate pencet 'DOTANE HERE' diatas . jangan lupa SUBSCRIBE")

confirm ("DI SINI HANYA UPLOAD EPISODE TERBARU SAJA")

function search_animal() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('animals');
 
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}

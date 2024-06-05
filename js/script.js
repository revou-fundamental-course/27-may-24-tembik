var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex = slideIndex + n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = imgList.length;
  }

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }
  imgList[slideIndex - 1].style.display = "block";

  //   setInterval(() => {
  //     plusDivs(1);
  //   }, 2000);
}

function perkenalan() {
  let namaAnda = prompt("Selamat datang perkenalkan nama anda", "");
  document.getElementById("nama").innerHTML = namaAnda;
}

// perkenalan();

const formSubmit = document.getElementById("form-submit");
formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const tglLahir = document.getElementById("tgl-lahir").value;
  const jk = document.querySelector('input[name="jk"]:checked').value;
  const pesan = document.getElementById("pesan").value;

  if (
    name == null ||
    name == "" ||
    tglLahir == null ||
    tglLahir == "" ||
    jk == null ||
    jk == "" ||
    pesan == null ||
    pesan == ""
  ) {
    alert("field tidak boleh kosong");
  } else {
    document.getElementById("tampil-name").innerHTML = name;
    document.getElementById("tampil-tgl-lahir").innerHTML = tglLahir;
    document.getElementById("tampil-jk").innerHTML = jk;
    document.getElementById("tampil-pesan").innerHTML = pesan;
  }
});

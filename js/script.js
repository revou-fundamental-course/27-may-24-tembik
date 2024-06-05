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
  // console.log(slideIndex);
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

document.getElementById("name")

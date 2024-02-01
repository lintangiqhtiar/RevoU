const slider = document.getElementById('image-slider');
let slideIndex = 0;

function showSlides() {
  slideIndex++;
  if (slideIndex >= slider.children.length) {
    slideIndex = 0;
  }

  const transformValue = -slideIndex * 100 + '%';
  slider.style.transform = `translateX(${transformValue})`;

  setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik (3000 milidetik)
}

showSlides(); // Panggil fungsi pertama kali
// Wa

const number = "6281249192305"; // Nomor tujuan
const message = "Halo, saya ingin menghubungi Anda!"; // Pesan lebih umum
document.getElementById(
  "whatsapp-link"
).href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

// Mail
const emailAddress = "andri.dev.code@gmail.com"; // Alamat email tujuan
const subject = "Pertanyaan tentang layanan Anda"; // Subjek email
const body = "Halo, saya ingin bertanya tentang layanan yang Anda tawarkan."; // Isi pesan email

document.getElementById(
  "email-link"
).href = `mailto:${emailAddress}?subject=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;

//typing
const textElement = document.querySelector(".conten-text-max");
const text = "Welcome to Andri Developer!";
let index = 0;
let isDeleting = false;

function typeText() {
  if (!isDeleting && index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 150); // Kecepatan mengetik
  } else if (isDeleting && index > 0) {
    textElement.textContent = text.substring(0, index - 1);
    index--;
    setTimeout(typeText, 100); // Kecepatan menghapus
  } else if (!isDeleting && index === text.length) {
    setTimeout(() => (isDeleting = true), 1000); // Tunggu 1 detik sebelum menghapus
    setTimeout(typeText, 1000);
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    setTimeout(typeText, 500); // Tunggu 0,5 detik sebelum mulai mengetik lagi
  }
}

typeText();

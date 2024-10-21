document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to Andri Developer!";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 150); // mengatur kecepatan mengetik
    }
  }

  typeText();
});

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  // Handles playing and pausing with button text updates
  btn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      btn.textContent = "PAUSE MUSIC 🎵";
      btn.style.background = "linear-gradient(45deg, #ff758c, #ff7eb3)";
    } else {
      music.pause();
      btn.textContent = "PRESS ME KIYOMI";
      btn.style.background = "linear-gradient(45deg, #ff7eb3, #ff758c)";
    }
  });
});
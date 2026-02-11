setInterval(createPetal, 500); // Slightly slower rate for better performance

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";

  // Randomize starting position
  const startFromTop = Math.random() < 0.5;
  if (startFromTop) {
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-50px";
  } else {
    petal.style.left = "-50px";
    petal.style.top = Math.random() * window.innerHeight + "px";
  }

  // Randomize fall speed and rotation
  petal.style.animationDuration = 8 + Math.random() * 7 + "s";
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(petal);

  // Cleanup to keep the DOM light
  setTimeout(() => {
    petal.remove();
  }, 15000);
}
document.addEventListener("DOMContentLoaded", () => {
  const memoryContainer = document.getElementById("memories");
  
  // Array of your GIFs from your original logic
  const gifs = [
    "images/heart.gif",
    "images/sun.gif",
    "images/rose.gif",
    "images/cupid.gif",
    "images/flower.gif"
  ];

  // The indices where you want GIFs to appear (1-based)
  const gifIndexes = [2, 7, 12, 18, 24]; 
  
  // Available animations from your style.css
  const animations = ["bounce", "wiggle", "hop", "tiltSide", "lookAround"];

  for (let i = 1; i <= 27; i++) {
    const section = document.createElement("section");
    section.className = "memory";

    const container = document.createElement("div");
    container.className = "memory-container";

    // Main memory photo
    const img = document.createElement("img");
    img.src = `images/pic${i}.jpg`;
    img.alt = `Memory ${i}`;
    img.className = "main-photo";
    container.appendChild(img);

    // Add GIF if this index matches your gifIndexes list
    const gifPos = gifIndexes.indexOf(i);
    if (gifPos !== -1) {
      const cartoon = document.createElement("img");
      cartoon.src = gifs[gifPos];
      // Cycle through your CSS animations
      const animClass = animations[i % animations.length];
      cartoon.className = `cartoon ${animClass}`;
      cartoon.style.width = "60px";
      container.appendChild(cartoon);
    }

    section.appendChild(container);

    // Memory caption
    const p = document.createElement("p");
    p.textContent = `Memory #${i}`;
    section.appendChild(p);

    memoryContainer.appendChild(section);
  }

  // MODERN FADE-IN (Intersection Observer)
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Optional: stop observing once it's visible to save resources
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".memory").forEach(mem => observer.observe(mem));
});
const btn = document.getElementById("projectBtn");

btn.addEventListener("click", () => {
  // Animate button
  gsap.fromTo(
    btn,
    { scale: 1 },
    {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.in",
      onComplete: () => {
        gsap.to(btn, {
          scale: 1,
          duration: 0.1,
          ease: "power2.out"
        });
      }
    }
  );

  showComingSoon();
});



function showComingSoon() {
  const text = document.createElement("div");
  text.classList.add("coming-soon");
  text.innerText = "coming soon";

  const neonColors = [
  '#FF6EC7', // neon pink
  '#39FF14', // neon green
  '#00FFFF', // neon cyan
  '#FF00FF', // magenta
  '#FFD700', // neon gold
  '#FF1493', // deep pink
  '#00FFEF', // aqua
  '#FF4500', // neon orange
  '#FF3131', // hot red
  '#DA70D6', // orchid
  '#7CFC00', // lawn green
  '#1E90FF', // dodger blue
  '#FF69B4', // hot pink
  '#00FF7F', // spring green
  '#FFB6C1', // light pink
  '#00CED1', // dark turquoise
  '#FFFF33', // lemon yellow
  '#FF5F1F', // orange-red
  '#CCFF00', // chartreuse yellow
  '#E0FFFF'  // light cyan
];

  text.style.color = neonColors[Math.floor(Math.random() * neonColors.length)];
  text.style.whiteSpace = "nowrap";

  // Position randomly within viewport
  const padding = 100; // prevent from going off screen edges
  const x = Math.random() * (window.innerWidth - padding * 2) + padding;
  const y = Math.random() * (window.innerHeight - padding * 2) + padding;

  text.style.left = `${x}px`;
  text.style.top = `${y}px`;

  document.body.appendChild(text);

  // Remove after fade animation
  setTimeout(() => {
    text.remove();
  }, 4000);
}




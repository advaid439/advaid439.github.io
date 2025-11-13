console.log("EFFECTS JS LOADED");

// Typing animation
const subtitle = document.getElementById("subtitle");
const text = subtitle.getAttribute("data-text");
let i = 0;

function type() {
  if (i < text.length) {
    subtitle.textContent = text.slice(0, i+1);
    i++;
    setTimeout(type, 60);
  }
}
setTimeout(type, 3500);

// Sound elements
//const hum = document.getElementById("hum");
const tick = document.getElementById("tick");
const beep = document.getElementById("beep");
const crackle = document.getElementById("crackle");

// Unlock ALL sound AFTER first click
window.addEventListener("click", () => {

    // Start hum
  //  hum.volume = 0.25;
    // hum.play().catch(e => console.log("Hum blocked:", e));

    // Play crackle once
    crackle.currentTime = 0;
    crackle.play();

    // Enable tick on hover
    document.querySelectorAll("h1, h2").forEach(el => {
        el.addEventListener("mouseenter", () => {
            tick.currentTime = 0;
            tick.play();
        });
    });

    // Enable beep on nav hover
    document.querySelectorAll("nav a").forEach(el => {
        el.addEventListener("mouseenter", () => {
            beep.currentTime = 0;
            beep.play();
        });
    });

    console.log("Sound system unlocked.");

}, { once: true });

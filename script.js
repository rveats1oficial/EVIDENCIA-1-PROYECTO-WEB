// Botón interactivo con Tone.js
document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playBtn");

  let isPlaying = false;
  let synth;

  playBtn.addEventListener("click", async () => {
    if (!isPlaying) {
      await Tone.start();
      synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease("C4", "2n");
      playBtn.textContent = "⏸ Stop Demo";
      isPlaying = true;
    } else {
      // Stop cualquier sonido
      Tone.Transport.stop();
      playBtn.textContent = "▶ Play Demo";
      isPlaying = false;
    }
  });
});

// Fondo p5.js (placeholder)
function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("bg-canvas");
  background("#faf7e8");
}

function draw() {
  // Aquí se podrá experimentar con animaciones visuales más adelante
}
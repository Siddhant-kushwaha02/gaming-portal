// script.js
document.addEventListener("DOMContentLoaded", () => {
  const mainBtn = document.getElementById("play-main");
  if (mainBtn && mainBtn.href.includes("YOUR_AWS_GAME_URL")) {
    mainBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Game link not configured yet. Please update YOUR_AWS_GAME_URL.");
    });
  }
});

let limit = 0;
let current = 1.00;
let interval;

function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function startBet() {
  let input = document.getElementById("limitInput").value;

  if (input) {
    limit = parseFloat(input);
  } else {
    limit = 0; // no limit → normal mode
  }

  current = 1.00;
  document.getElementById("result").innerText = current.toFixed(2);

  interval = setInterval(runGame, 100);
}

function runGame() {
  current += 0.05;

  document.getElementById("result").innerText = current.toFixed(2) + "x";

  // 🔥 agar limit set hai
  if (limit > 0 && current >= limit) {
    clearInterval(interval);
    document.getElementById("result").innerText += " 💥 Crash!";
  }

  // 🔥 agar limit nahi hai (normal random crash)
  if (limit === 0 && current >= Math.random() * 5 + 1) {
    clearInterval(interval);
    document.getElementById("result").innerText += " 💥 Random Crash!";
  }
}

const ACCESS_CODE = "9435";

let multiplier = 1;
let interval;
let crashed = false;
let crashPoint;
let currentBet = 0;

let userLimit = 0;

// 🔐 password check
function checkAccess() {
    let code = document.getElementById("accessCode").value;
    let msg = document.getElementById("wrongMsg");

    if (code === ACCESS_CODE) {
        document.getElementById("accessPage").classList.remove("active");
        document.getElementById("page1").classList.add("active");
        msg.style.display = "none";
    } else {
        msg.style.display = "block";
    }
}

// page change
function goPage2() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");
}

// start game
function startGame() {
    let id = document.getElementById("betId").value;

    if (id === "") {
        alert("Enter Bet ID!");
        return;
    }

    currentBet = parseInt(id);

    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.add("active");

    startRound();
}

// game logic
function startRound() {

    document.getElementById("betDisplay").innerText = "Bet ID: " + currentBet;

    multiplier = 1;
    crashed = false;

    let input = document.getElementById("limitInput").value;

    if (input && parseFloat(input) > 0) {
        userLimit = parseFloat(input);
        crashPoint = userLimit;
    } else {
        crashPoint = (Math.random() * 3 + 1).toFixed(2);
    }

    document.getElementById("nextBetBtn").disabled = true;

    const plane = document.getElementById("plane");
    plane.style.left = "0px";
    plane.style.bottom = "0px";

    clearInterval(interval);

    interval = setInterval(() => {

        if (crashed) return;

        multiplier += 0.02;

        document.getElementById("multiplier").innerText =
            multiplier.toFixed(2) + "x";

        plane.style.left = (multiplier * 60) + "px";
        plane.style.bottom = (multiplier * 25) + "px";

        if (multiplier >= crashPoint) {
            crashed = true;
            clearInterval(interval);

            document.getElementById("multiplier").innerText =
                "💥 Crashed at " + crashPoint + "x";

            document.getElementById("nextBetBtn").disabled = false;
        }

    }, 100);
}

// next round
function nextRound() {
    currentBet++;
    startRound();
}

// 3 dots menu
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

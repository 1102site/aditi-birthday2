// Gift Box Surprise
document.querySelectorAll(".gift-box").forEach((box) => {
    box.addEventListener("click", () => {
        const surprise = box.getAttribute("data-surprise");
        alert(surprise);
    });
});

// Memory Matching Game
document.addEventListener("DOMContentLoaded", () => {
    const memoryGrid = document.querySelector(".memory-grid");
    const symbols = ["🍎", "🍌", "🍇", "🍓", "🍒", "🥭", "🍍", "🍋"];
    const cards = [...symbols, ...symbols]; // Duplicate symbols for pairs
    cards.sort(() => Math.random() - 0.5); // Shuffle cards

    cards.forEach((symbol) => {
        const card = document.createElement("div");
        card.classList.add("memory-card");
        card.dataset.symbol = symbol;
        memoryGrid.appendChild(card);
    });

    let flippedCards = [];
    memoryGrid.addEventListener("click", (e) => {
        if (!e.target.classList.contains("memory-card") || e.target.classList.contains("flipped")) return;
        e.target.textContent = e.target.dataset.symbol;
        e.target.classList.add("flipped");
        flippedCards.push(e.target);

        if (flippedCards.length === 2) {
            if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
                flippedCards = [];
            } else {
                setTimeout(() => {
                    flippedCards.forEach((card) => {
                        card.textContent = "";
                        card.classList.remove("flipped");
                    });
                    flippedCards = [];
                }, 1000);
            }
        }
    });
});

// Fireworks Animation
document.getElementById("fireworks-button").addEventListener("click", () => {
    const fireworksDisplay = document.getElementById("fireworks-display");

    for (let i = 0; i < 10; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}px`;
        firework.style.animationDelay = `${Math.random()}s`;
        fireworksDisplay.appendChild(firework);

        firework.addEventListener("animationend", () => firework.remove());
    }
});

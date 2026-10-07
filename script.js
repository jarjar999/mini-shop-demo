const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");

const products = [
    {
        name: "Laptop",
        price: "899 €",
        description: "Leistungsstarker Laptop für Schule und Arbeit."
    },
    {
        name: "Smartphone",
        price: "499 €",
        description: "Modernes Smartphone mit langer Akkulaufzeit."
    },
    {
        name: "Monitor",
        price: "199 €",
        description: "24-Zoll-Monitor für Büro und Gaming."
    }
];

const detailButtons = document.querySelectorAll(".details-btn");

// Modal öffnen
detailButtons.forEach((button, index) => {
    button.addEventListener("click", () => {

        document.getElementById("modal-title").textContent =
            products[index].name;

        document.getElementById("modal-price").textContent =
            products[index].price;

        document.getElementById("modal-description").textContent =
            products[index].description;

        modal.classList.remove("hidden");
    });
});

// Modal schließen
closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Modal mit ESC schließen
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.classList.add("hidden");
    }
});
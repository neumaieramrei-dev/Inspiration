document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".practice-card");

    const modal = document.getElementById("cardModal");
    const modalCard = document.getElementById("modalCard");

    const modalClose = document.getElementById("modalClose");
    const flipButton = document.getElementById("flipButton");

    const modalNumber = document.getElementById("modalNumber");
    const modalTitle = document.getElementById("modalTitle");
    const modalLabel = document.getElementById("modalLabel");
    const modalDescription = document.getElementById("modalDescription");

    const practiceButton = document.getElementById("practiceButton");


    /* OPEN CARD */

    cards.forEach(card => {

        card.addEventListener("click", () => {

            modalNumber.textContent = card.dataset.number;
            modalTitle.textContent = card.dataset.title;
            modalLabel.textContent = card.dataset.label;
            modalDescription.textContent = card.dataset.description;

            practiceButton.href = card.dataset.page;

            modalCard.classList.remove("flipped");

            modal.classList.add("open");

            document.body.classList.add("modal-open");

        });

    });


    /* FLIP */

    flipButton.addEventListener("click", () => {

        modalCard.classList.toggle("flipped");

    });


    /* CLOSE */

    modalClose.addEventListener("click", () => {

        modal.classList.remove("open");
        modalCard.classList.remove("flipped");

        document.body.classList.remove("modal-open");

    });


    /* CLOSE OUTSIDE */

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            modal.classList.remove("open");
            modalCard.classList.remove("flipped");

            document.body.classList.remove("modal-open");

        }

    });


    /* ESC */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            modal.classList.remove("open");
            modalCard.classList.remove("flipped");

            document.body.classList.remove("modal-open");

        }

    });

});
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".practice-card");

    const modal = document.getElementById("cardModal");
    const modalCard = document.getElementById("modalCard");

    const modalClose = document.getElementById("modalClose");
    const flipButton = document.getElementById("flipButton");

    const modalNumber = document.getElementById("modalNumber");
    const modalTitle = document.getElementById("modalTitle");
    const modalArt = document.getElementById("modalArt");

    const modalLabel = document.getElementById("modalLabel");
    const modalDescription = document.getElementById("modalDescription");

    const practiceButton = document.getElementById("practiceButton");


    /* =====================================================
       OPEN CARD
    ====================================================== */

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const number = card.dataset.number;
            const title = card.dataset.title;
            const label = card.dataset.label;
            const description = card.dataset.description;
            const page = card.dataset.page;

            modalNumber.textContent = number;
            modalTitle.textContent = title;

            modalLabel.textContent = label;
            modalDescription.textContent = description;

            modalArt.innerHTML =
                card.querySelector(".card-art").innerHTML;

            /*
             * The cards are inside index.html,
             * while the exercises are inside /pages/
             */

            practiceButton.href = "pages/" + page;

            modalCard.classList.remove("flipped");

            modal.classList.add("active");

            document.body.classList.add("modal-open");

        });

    });


    /* =====================================================
       FLIP CARD
    ====================================================== */

    flipButton.addEventListener("click", () => {

        modalCard.classList.toggle("flipped");

    });


    /* =====================================================
       CLOSE
    ====================================================== */

    function closeModal() {

        modal.classList.remove("active");

        modalCard.classList.remove("flipped");

        document.body.classList.remove("modal-open");

    }


    modalClose.addEventListener("click", closeModal);


    /* =====================================================
       CLOSE WHEN CLICKING OUTSIDE
    ====================================================== */

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            closeModal();

        }

    });


    /* =====================================================
       ESC KEY
    ====================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeModal();

        }

    });

});
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const currentLabel = document.getElementById("slideCurrent");

const nextButton = document.getElementById("nextSlide");
const prevButton = document.getElementById("prevSlide");

let current = 0;


/* ==========================================================
   SLIDE NAVIGATION
   ========================================================== */

function showSlide(index) {

    // Endlos durch die Slides navigieren
    current = (index + slides.length) % slides.length;

    // Alle Slides ein-/ausblenden
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === current);
    });

    // Aktiven Punkt aktualisieren
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === current);
    });

    // Nummer oben links aktualisieren
    currentLabel.textContent = String(current + 1).padStart(2, "0");
}


/* ==========================================================
   NEXT / PREVIOUS BUTTONS
   ========================================================== */

nextButton.addEventListener("click", () => {
    showSlide(current + 1);
});

prevButton.addEventListener("click", () => {
    showSlide(current - 1);
});


/* ==========================================================
   DOT NAVIGATION
   ========================================================== */

dots.forEach(dot => {

    dot.addEventListener("click", () => {

        const slideNumber = Number(dot.dataset.slide);

        showSlide(slideNumber);

    });

});


/* ==========================================================
   KEYBOARD NAVIGATION
   ========================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "ArrowRight") {
        showSlide(current + 1);
    }

    if (event.key === "ArrowLeft") {
        showSlide(current - 1);
    }

});


/* ==========================================================
   INTERACTIVE FEELING BUBBLES
   ========================================================== */

const feelingStage = document.querySelector(".feeling-stage");
const bubbles = document.querySelectorAll(".bubble");


/*
   Nur auf Geräten mit Maus aktivieren.
   Auf Smartphones gibt es keinen klassischen Hover.
*/

if (
    feelingStage &&
    window.matchMedia("(pointer: fine)").matches
) {

    feelingStage.addEventListener("pointermove", event => {

        const rect = feelingStage.getBoundingClientRect();

        /*
           Mausposition zwischen -0.5 und +0.5 berechnen
        */

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;


        /*
           Jede Kugel reagiert ein kleines bisschen
           unterschiedlich auf die Maus.
        */

        bubbles.forEach((bubble, index) => {

            const strength = 7 + index * 1.5;

            bubble.style.marginLeft =
                `${x * strength}px`;

            bubble.style.marginTop =
                `${y * strength}px`;

        });

    });


    /*
       Wenn die Maus die Fläche verlässt,
       gehen die Kugeln wieder zurück.
    */

    feelingStage.addEventListener("pointerleave", () => {

        bubbles.forEach(bubble => {

            bubble.style.marginLeft = "0px";
            bubble.style.marginTop = "0px";

        });

    });

}
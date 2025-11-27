document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");

        if (targetId !== "#") {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const chips = document.querySelectorAll(".chips span");

chips.forEach(chip => {
    chip.addEventListener("click", () => {
        chip.classList.toggle("chip-selected");
    });
});

const demoBtn = document.querySelector(".btn-demo");

if (demoBtn) {
    demoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Demo AR: Esta función estará disponible en la app móvil completa.");
    });
}

const form = document.querySelector(".signup-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("📩 ¡Registro enviado!\nPróximamente recibirás un correo de bienvenida.");
        form.reset();
    });
}

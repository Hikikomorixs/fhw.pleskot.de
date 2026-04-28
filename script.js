document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const detailButtons = document.querySelectorAll(".detail-toggle");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-card");
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.textContent = isOpen ? "Details schliessen" : "Projektdetails";
    });
  });

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = form.querySelector("button");
    const previousLabel = button.textContent;

    button.textContent = "Anfrage gesendet";
    button.disabled = true;

    window.setTimeout(() => {
      button.textContent = previousLabel;
      button.disabled = false;
      form.reset();
    }, 2200);
  });
});

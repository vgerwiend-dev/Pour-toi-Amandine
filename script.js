const pages = [...document.querySelectorAll(".page")];
function showPage(id) {
  pages.forEach(page => page.classList.toggle("active", page.id === id));
  window.scrollTo({top: 0, behavior: "smooth"});
}
document.querySelectorAll("[data-next]").forEach(button => button.addEventListener("click", () => showPage(button.dataset.next)));
document.querySelectorAll("[data-back]").forEach(button => button.addEventListener("click", () => showPage(button.dataset.back)));

const whatsappNumber = "50955714731";
function openWhatsApp(message) {
  // Opens WhatsApp with the recipient and message prefilled.
  // The message is not sent automatically: the user must press Send in WhatsApp.
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
document.getElementById("yesButton").addEventListener("click", () => {
  showPage("success");
  openWhatsApp("Objectif atteint! Manie a répondu par l’affirmative.");
});

const noButton = document.getElementById("noButton");
let noAttempts = 0;
noButton.addEventListener("click", () => {
  noAttempts += 1;
  if (noAttempts <= 2) {
    const container = document.querySelector(".proposal-content");
    const bounds = container.getBoundingClientRect();
    const maxX = Math.max(0, Math.min(180, window.innerWidth - bounds.width / 2 - 80));
    const maxY = Math.max(0, Math.min(100, window.innerHeight - bounds.height / 2 - 80));
    const x = (Math.random() > .5 ? 1 : -1) * (55 + Math.random() * maxX);
    const y = (Math.random() > .5 ? 1 : -1) * (15 + Math.random() * maxY);
    noButton.style.transform = `translate(${x}px, ${y}px)`;
    noButton.textContent = noAttempts === 1 ? "Tu es sûr·e ?" : "Vraiment ?";
  } else {
    showPage("honest");
    openWhatsApp("Courage!!! La prochaine sera la bonne!");
  }
});

// Navegação mobile
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Scroll para a biografia
const btnScrollBio = document.getElementById("btnScrollBio");
const bioSection = document.getElementById("bio");

btnScrollBio.addEventListener("click", () => {
  bioSection.scrollIntoView({ behavior: "smooth" });
});

// Agenda fictícia
const agendaBody = document.getElementById("agendaBody");

const eventos = [
  { data: "15 Mar 2026", cidade: "Porto", local: "Coliseu do Porto" },
  { data: "02 Abr 2026", cidade: "Lisboa", local: "Altice Arena" },
  { data: "20 Abr 2026", cidade: "Coimbra", local: "Praça da Canção" },
  { data: "10 Mai 2026", cidade: "Braga", local: "Theatro Circo" }
];

eventos.forEach(ev => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${ev.data}</td>
    <td>${ev.cidade}</td>
    <td>${ev.local}</td>
    <td><button class="btn-outline btn-small">Mais info</button></td>
  `;

  agendaBody.appendChild(tr);
});

// Feedback simples do formulário
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  formFeedback.textContent = "Obrigado pela mensagem! (Este formulário é apenas demonstrativo.)";
  formFeedback.style.color = "#f5c518";
  contactForm.reset();
});

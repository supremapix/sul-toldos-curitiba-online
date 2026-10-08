document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    }
  });

  // Awning Calculator Logic
  const calcForm = document.getElementById("awning-calc-form");
  if (calcForm) {
    const widthInput = document.getElementById("calc-width");
    const heightInput = document.getElementById("calc-height");
    const typeSelect = document.getElementById("calc-type");
    const resultBox = document.getElementById("calc-result");

    const calculatePrice = () => {
      const width = parseFloat(widthInput.value) || 0;
      const height = parseFloat(heightInput.value) || 0;
      const area = width * height;
      
      let basePricePerSqM = 220;
      const typeVal = typeSelect.value;
      if (typeVal === "retratil") basePricePerSqM = 280;
      if (typeVal === "motorizado") basePricePerSqM = 380;
      if (typeVal === "policarbonato") basePricePerSqM = 240;
      if (typeVal === "cortina") basePricePerSqM = 220;

      const estimatedPrice = area > 0 ? area * basePricePerSqM : basePricePerSqM * 10;
      if (resultBox) {
        resultBox.innerHTML = `Estimativa: <strong>R$ ${estimatedPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> (${area > 0 ? area.toFixed(1) + ' m²' : 'Área aproximada'})`;
      }
    };

    widthInput?.addEventListener("input", calculatePrice);
    heightInput?.addEventListener("input", calculatePrice);
    typeSelect?.addEventListener("change", calculatePrice);
    calculatePrice();
  }
});

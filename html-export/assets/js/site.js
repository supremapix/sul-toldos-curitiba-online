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

  // WhatsApp Rotation Logic
  const whatsappNumbers = ["5541995304757", "5541991031466"];
  let currentWhatsappIndex = parseInt(localStorage.getItem('whatsappIndex') || '0');

  function getNextWhatsappNumber() {
      const number = whatsappNumbers[currentWhatsappIndex];
      currentWhatsappIndex = (currentWhatsappIndex + 1) % whatsappNumbers.length;
      localStorage.setItem('whatsappIndex', currentWhatsappIndex.toString());
      return number;
  }

  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
      link.addEventListener('click', (e) => {
          const newNumber = getNextWhatsappNumber();
          try {
              const url = new URL(link.href);
              const textParam = url.searchParams.get('text');
              link.href = `https://wa.me/${newNumber}${textParam ? `?text=${encodeURIComponent(textParam)}` : ''}`;
          } catch (err) {
              const textMatch = link.href.match(/[?&]text=([^&#]*)/);
              const textParam = textMatch ? textMatch[1] : '';
              link.href = `https://wa.me/${newNumber}${textParam ? `?text=${textParam}` : ''}`;
          }
      });
  });

  // ANIMATIONS & SCROLL EFFECT INTERACTION CONTRACTS
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Header scroll reduce effect
  const header = document.querySelector("header");
  const stripe = document.querySelector(".stripe-divider");
  const headerContainer = document.querySelector(".header-container");
  
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
        if (stripe) stripe.style.height = "4px";
        if (headerContainer) headerContainer.style.minHeight = "4rem";
      } else {
        header.classList.remove("scrolled");
        if (stripe) stripe.style.height = "8px";
        if (headerContainer) headerContainer.style.minHeight = "6rem";
      }
    }, { passive: true });
  }

  // 2. Parallax Hero Image on Desktop
  const heroImg = document.querySelector(".hero img");
  if (heroImg && window.innerWidth >= 1024 && !prefersReduced) {
    window.addEventListener("scroll", () => {
      heroImg.style.transform = `translateY(${window.scrollY * 0.15}px) scale(1.05)`;
    }, { passive: true });
  }

  // 3. Sequential Hero Entrance on load
  const heroBadge = document.querySelector(".hero .badge");
  const heroH1 = document.querySelector(".hero h1");
  const heroP = document.querySelector(".hero p");
  const heroButtons = document.querySelector(".hero-buttons");
  const heroSeals = document.querySelector(".hero-seals");

  if (heroBadge) heroBadge.classList.add("animate-slide-left");
  if (heroH1 && !prefersReduced) {
    // Split H1 into structural lines for transition
    const text = heroH1.innerHTML;
    if (text.includes("Toldos comerciais")) {
      heroH1.style.display = "flex";
      heroH1.style.flexDirection = "column";
      heroH1.style.gap = "0.25rem";
      heroH1.innerHTML = `
        <span class="animate-line-up" style="animation-delay: 120ms;">Toldos comerciais</span>
        <span class="animate-line-up" style="animation-delay: 240ms;">que fazem sua</span>
        <span class="text-primary animate-line-up" style="animation-delay: 360ms; position: relative; display: inline-block;">
          <span style="position: relative; z-index: 10;">fachada vender mais</span>
          <span class="animate-draw-underline" style="position: absolute; bottom: 0; left: 0; width: 0; height: 4px; background-color: #C8361D; animation-delay: 800ms;"></span>
        </span>
      `;
    }
  }

  if (heroP && !prefersReduced) {
    heroP.classList.add("animate-fade-up");
    heroP.style.animationDelay = "500ms";
    heroP.style.opacity = "0";
    heroP.style.animationFillMode = "forwards";
  }

  if (heroButtons && !prefersReduced) {
    heroButtons.classList.add("animate-fade-up");
    heroButtons.style.animationDelay = "650ms";
    heroButtons.style.opacity = "0";
    heroButtons.style.animationFillMode = "forwards";
  }

  // 4. Reveal sections on scroll
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (revealElements.length > 0 && !prefersReduced) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.08 });
    
    revealElements.forEach(el => observer.observe(el));
  }

  // 5. Process Steps scroll & line drawing
  const processSection = document.getElementById("process");
  const horizontalProgress = document.querySelector(".process-line-horizontal-progress");
  const verticalProgress = document.querySelector(".process-line-vertical-progress");
  const processNumbers = document.querySelectorAll(".process-number");
  let processStarted = false;
  
  if (processSection) {
    // Initialize process numbers to 00 if JS is active and motion is allowed
    if (!prefersReduced) {
      processNumbers.forEach(num => {
        num.textContent = "00";
      });
    }

    const handleProcessScroll = () => {
      const rect = processSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const progress = Math.min(Math.max((viewportHeight - rect.top) / (rect.height + 100), 0), 1);
      
      if (horizontalProgress) horizontalProgress.style.width = `${progress * 100}%`;
      if (verticalProgress) verticalProgress.style.height = `${progress * 100}%`;
      
      if (viewportHeight - rect.top > 100 && !processStarted) {
        processStarted = true;
        processNumbers.forEach((num, idx) => {
          setTimeout(() => {
            num.style.borderColor = "#C8361D";
            num.style.color = "#C8361D";
            num.style.transform = "scale(1.1)";
            if (!prefersReduced) {
              const targetVal = "0" + (idx + 1);
              num.textContent = targetVal;
            }
          }, idx * 150);
        });
      }
    };
    
    window.addEventListener("scroll", handleProcessScroll, { passive: true });
    handleProcessScroll();
  }

  // 6. Floating phone swing toggle every 8 seconds
  const floatPhone = document.querySelector(".btn-float-phone");
  if (floatPhone) {
    floatPhone.classList.add("animate-phone-swing");
  }

  // 7. Active SVG animations inside segment cards when visible
  const segmentCards = document.querySelectorAll(".segment-card");
  if (segmentCards.length > 0 && !prefersReduced) {
    const svgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const svg = entry.target.querySelector("svg");
        if (svg) {
          if (entry.isIntersecting) {
            svg.classList.add("active-anim");
          } else {
            svg.classList.remove("active-anim");
          }
        }
      });
    }, { threshold: 0.1 });
    segmentCards.forEach(card => svgObserver.observe(card));
  }
});

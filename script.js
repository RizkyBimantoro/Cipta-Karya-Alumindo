window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelectorAll('nav a');

  if (toggle) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('open');
    });
  }

  navLinks.forEach(a => a.addEventListener('click', () => {
    header.classList.remove('open');
  }));

  const modal = document.getElementById('lightbox-modal');
  const modalImg = modal ? modal.querySelector('.lightbox-image') : null;
  const modalTitle = modal ? modal.querySelector('.lightbox-title') : null;
  const modalDesc = modal ? modal.querySelector('.lightbox-desc') : null;
  const btnPrev = modal ? modal.querySelector('.lightbox-prev') : null;
  const btnNext = modal ? modal.querySelector('.lightbox-next') : null;
  const btnClose = modal ? modal.querySelector('.lightbox-close') : null;
  const items = Array.from(document.querySelectorAll('.galeri-item'));
  let current = -1;

  function updateLightbox(index) {
    const item = items[index];
    if (!item || !modalImg) return;
    const img = item.querySelector('img');
    const titleEl = item.querySelector('.overlay h4');
    const descEl = item.querySelector('.overlay p');
    modalImg.src = img.currentSrc || img.src;
    modalImg.alt = img.alt || '';
    if (modalTitle) modalTitle.textContent = titleEl ? titleEl.textContent : '';
    if (modalDesc) modalDesc.textContent = descEl ? descEl.textContent : '';
  }

  function openLightbox(index) {
    current = index;
    updateLightbox(current);
    if (modal) modal.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeLightbox() {
    if (modal) modal.classList.remove('open');
    document.body.classList.remove('no-scroll');
    current = -1;
  }

  function next() {
    if (!items.length) return;
    current = (current + 1) % items.length;
    updateLightbox(current);
  }

  function prev() {
    if (!items.length) return;
    current = (current - 1 + items.length) % items.length;
    updateLightbox(current);
  }

  items.forEach((item, idx) => {
    const img = item.querySelector('img');
    if (img) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => openLightbox(idx));
    }
  });

  if (btnNext) btnNext.addEventListener('click', next);
  if (btnPrev) btnPrev.addEventListener('click', prev);
  if (btnClose) btnClose.addEventListener('click', closeLightbox);

  if (modal) {
    modal.addEventListener('click', (e) => {
      const content = modal.querySelector('.lightbox-content');
      if (e.target === modal || (content && !content.contains(e.target))) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (current === -1) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  // === COUNTER ANIMATION FOR STATS ===
  const counters = document.querySelectorAll('.stat-number');
  let animated = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    });
  };

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          animateCounters();
        }
      });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
  }

  // === FAQ ACCORDION ===
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close other items
      const isActive = item.classList.contains('active');
      
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // === WHATSAPP FLOAT BUTTON VISIBILITY ===
  const whatsappFloat = document.querySelector('.whatsapp-float');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (whatsappFloat) {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        whatsappFloat.style.opacity = '1';
        whatsappFloat.style.pointerEvents = 'auto';
      } else {
        whatsappFloat.style.opacity = '0';
        whatsappFloat.style.pointerEvents = 'none';
      }
    }
    lastScrollY = window.scrollY;
  });
});

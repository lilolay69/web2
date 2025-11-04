document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('navMenu');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    function openMenu() {
        hamburger.classList.add('active'); 
        nav.classList.add('active'); 
        overlay.classList.add('active'); 
        body.classList.add('menu-open'); 
    }

    function closeMenu() {
        hamburger.classList.remove('active'); 
        nav.classList.remove('active'); 
        overlay.classList.remove('active'); 
        body.classList.remove('menu-open'); 
    }

   
    if (hamburger) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            if (hamburger.classList.contains('active')) {
                closeMenu(); 
            } else {
                openMenu(); 
            }
        });
    }

    
    if (overlay) {
        overlay.addEventListener('click', function () {
            closeMenu();
        });
    }

    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            closeMenu();
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  const modal = document.getElementById('booking-success-modal');
  const resetBtn = document.getElementById('booking-reset');

  if (!form) return;

  const validators = {
    name: v => v.trim().length >= 2 || 'Nombre demasiado corto',
    email: v => /\S+@\S+\.\S+/.test(v) || 'Email no válido',
    ticket: v => (v && v !== '') || 'Selecciona un tipo de entrada',
    quantity: v => (Number(v) >= 1 && Number(v) <= 10) || 'Cantidad entre 1 y 10'
  };

  function showError(fieldName, message) {
    const span = form.querySelector(`.error[data-for="${fieldName}"]`);
    if (span) {
      span.textContent = message || '';
    }
  }

  function clearErrors() {
    form.querySelectorAll('.error').forEach(s => s.textContent = '');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    const data = new FormData(form);
    let valid = true;

    for (let [k, v] of data.entries()) {
      if (validators[k]) {
        const res = validators[k](v);
        if (res !== true) {
          showError(k, res);
          valid = false;
        }
      }
    }

    if (!valid) return;

    if (modal) {
      modal.setAttribute('aria-hidden', 'false');
    }

    form.reset();
  });

  document.querySelectorAll('[data-close="booking-success-modal"]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.setAttribute('aria-hidden', 'true');
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      clearErrors();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  const modal = document.getElementById('booking-success-modal');
  const resetBtn = document.getElementById('booking-reset');

  if (!form) return;

  const validators = {
    name: v => v.trim().length >= 2 || 'Nombre demasiado corto',
    email: v => /\S+@\S+\.\S+/.test(v) || 'Email no válido',
    ticket: v => (v && v !== '') || 'Selecciona un tipo de entrada',
    quantity: v => (Number(v) >= 1 && Number(v) <= 10) || 'Cantidad entre 1 y 10'
  };

  function showError(fieldName, message) {
    const span = form.querySelector(`.error[data-for="${fieldName}"]`);
    if (span) {
      span.textContent = message || '';
    }
  }

  function clearErrors() {
    form.querySelectorAll('.error').forEach(s => s.textContent = '');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    const data = new FormData(form);
    let valid = true;

    for (let [k, v] of data.entries()) {
      if (validators[k]) {
        const res = validators[k](v);
        if (res !== true) {
          showError(k, res);
          valid = false;
        }
      }
    }

    if (!valid) return;

    if (modal) {
      modal.setAttribute('aria-hidden', 'false');
    }

    form.reset();
  });

  document.querySelectorAll('[data-close="booking-success-modal"]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.setAttribute('aria-hidden', 'true');
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      clearErrors();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  const modal = document.getElementById('booking-success-modal');
  const resetBtn = document.getElementById('booking-reset');

  if (!form) return;

  const validators = {
    name: v => v.trim().length >= 2 || 'Nombre demasiado corto',
    email: v => /\S+@\S+\.\S+/.test(v) || 'Email no válido',
    ticket: v => (v && v !== '') || 'Selecciona un tipo de entrada',
    quantity: v => (Number(v) >= 1 && Number(v) <= 10) || 'Cantidad entre 1 y 10'
  };

  function showError(fieldName, message) {
    const span = form.querySelector(`.error[data-for="${fieldName}"]`);
    if (span) {
      span.textContent = message || '';
    }
  }

  function clearErrors() {
    form.querySelectorAll('.error').forEach(s => s.textContent = '');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    const data = new FormData(form);
    let valid = true;

    for (let [k, v] of data.entries()) {
      if (validators[k]) {
        const res = validators[k](v);
        if (res !== true) {
          showError(k, res);
          valid = false;
        }
      }
    }

    if (!valid) return;

    if (modal) {
      modal.setAttribute('aria-hidden', 'false');
    }

    form.reset();
  });

  document.querySelectorAll('[data-close="booking-success-modal"]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.setAttribute('aria-hidden', 'true');
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      clearErrors();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
      modal.setAttribute('aria-hidden', 'true');
    }
  });

});

/*--- ventana modal ---*/
const modal = document.getElementById('dateModal');
const openBtn = document.getElementById('openDateModalBtn');
const closeBtn = document.querySelector('.close-button');
const closeBtnAction = document.getElementById('closeModalBtn');

function openModal() {
    modal.style.display = 'flex'; 
}

function closeModal() {
    modal.style.display = 'none';
}

if (openBtn && modal) {
    openBtn.addEventListener('click', openModal);
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

if (closeBtnAction) {
    closeBtnAction.addEventListener('click', closeModal);
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


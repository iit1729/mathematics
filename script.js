(function () {
  var btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Enquiry form: sends without leaving the page when a Formspree link is used.
  var f = document.querySelector('form[name="enquiry"]');
  if (f && /formspree\.io|script\.google\.com/.test(f.action)) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var b = f.querySelector('button[type=submit]');
      b.disabled = true; b.textContent = 'Sending...';
      fetch(f.action, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('failed');
          f.innerHTML = '<p class="ok" style="display:block">Thank you! We have received your enquiry and will contact you soon.</p>';
        })
        .catch(function () {
          b.disabled = false; b.textContent = 'Send enquiry';
          alert('Could not send. Please message us on WhatsApp.');
        });
    });
  }
})();

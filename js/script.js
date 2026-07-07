// ===== Lightbox (pop-up images) =====
document.addEventListener('DOMContentLoaded', function () {
  var galleryItems = document.querySelectorAll('.gallery-item[data-full]');
  var overlay = document.getElementById('lightboxOverlay');
  var overlayImg = document.getElementById('lightboxImage');
  var closeBtn = document.getElementById('lightboxClose');

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      if (!overlay) return;
      overlayImg.src = item.getAttribute('data-full');
      overlayImg.alt = item.getAttribute('data-alt') || '';
      overlay.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      overlay.classList.remove('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  }

  // ===== Image map hotspot tooltip on hover (about page) =====
  var hotspots = document.querySelectorAll('area[data-label]');
  var hint = document.getElementById('hotspotHint');
  hotspots.forEach(function (area) {
    area.addEventListener('mouseenter', function (e) {
      if (!hint) return;
      hint.textContent = area.getAttribute('data-label');
      hint.style.display = 'block';
    });
    area.addEventListener('mousemove', function (e) {
      if (!hint) return;
      hint.style.left = e.offsetX + 'px';
      hint.style.top = e.offsetY + 'px';
    });
    area.addEventListener('mouseleave', function () {
      if (!hint) return;
      hint.style.display = 'none';
    });
  });

  // ===== Simple contact form validation feedback =====
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var alertBox = document.getElementById('formAlert');
      alertBox.classList.remove('d-none');
      form.reset();
      setTimeout(function () { alertBox.classList.add('d-none'); }, 4000);
    });
  }

  // ===== Menu category filter (dropdown) =====
  var filterLinks = document.querySelectorAll('[data-filter]');
  var menuRows = document.querySelectorAll('.menu-table tbody tr');
  filterLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var filter = link.getAttribute('data-filter');
      document.getElementById('menuFilterLabel').textContent = link.textContent;
      menuRows.forEach(function (row) {
        if (filter === 'all' || row.getAttribute('data-category') === filter) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
});

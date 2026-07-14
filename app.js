const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('menu-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.textContent = isOpen ? '×' : '☰';
  });

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = '☰';
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const mapEl = document.getElementById('venue-map');

if (mapEl && window.L) {
  const map = L.map(mapEl, { scrollWheelZoom: false });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);

  const places = [
    { name: 'Iglesia del Carmen', lat: 37.0160989, lng: -4.5533621, detail: 'Ceremonia · 12:00 h' },
    { name: 'Finca El Romeral', lat: 37.0333476, lng: -4.5272983, detail: 'Cóctel, comida y fiesta' },
    { name: 'Parador de Antequera', lat: 37.0253125, lng: -4.5645444, detail: 'Alojamiento · ★ 4.3 Google' },
    { name: 'Finca Eslava', lat: 37.0334553, lng: -4.5615584, detail: 'Alojamiento · ★ 4.4 Google' },
    { name: 'Hotel Fuente del Sol & Spa', lat: 36.9346826, lng: -4.6074152, detail: 'Alojamiento · ★ 4 Tripadvisor' },
  ];

  const markers = places.map((place) =>
    L.marker([place.lat, place.lng]).addTo(map).bindPopup(`<strong>${place.name}</strong><br>${place.detail}`)
  );

  map.fitBounds(L.featureGroup(markers).getBounds().pad(0.2));
}

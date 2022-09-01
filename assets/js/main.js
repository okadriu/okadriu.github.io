// FILTERS
const filtersEl = document.querySelector('.filters');
const projectEl1 = document.querySelector('.project:nth-child(1)');
const projectEl2 = document.querySelector('.project:nth-child(2)');
const projectEl3 = document.querySelector('.project:nth-child(3)');

const htmlEl = document.querySelector('html');

filtersEl.addEventListener('click', e => {

    document.querySelector('.filter-btn--active').classList.remove('filter-btn--active');
    e.target.classList.add('filter-btn--active');

    // Projekte ordnen
    const filterText = e.target.textContent;

    if (filterText === 'Alle') {
        projectEl1.style.opacity = '1';
        projectEl1.style.transform = 'scale(1)';
        projectEl2.style.opacity = '1';
        projectEl2.style.transform = 'scale(1)';
        projectEl3.style.opacity = '1';
        projectEl3.style.transform = 'scale(1)';
    } else if (filterText === 'Schulprojekte') {
        projectEl1.style.opacity = '0';
        projectEl1.style.transform = 'scale(0)';
        projectEl3.style.opacity = '0';
        projectEl3.style.transform = 'scale(0)';
        projectEl2.style.transform = 'translateX(-325px)';
        projectEl2.style.opacity = '1';
    } else if (filterText === 'Freizeitprojekte') {
        projectEl1.style.opacity = '1';
        projectEl1.style.transform = 'scale(1)';
        projectEl2.style.opacity = '0';
        projectEl2.style.transform = 'scale(0)';
        projectEl3.style.transform = 'translateX(-325px)';
        projectEl3.style.opacity = '1';
    }
});

// Wenn man einen Filter, z.B. Schulprojekte ausgewählt hat und dann das Fenster kleiner macht, gibt es einen Bug also habe ich diese Lösung gefunden:
window.addEventListener('resize', () => {
    if (window.innerWidth < 1001) {
        projectEl1.style.opacity = '1';
        projectEl1.style.transform = 'scale(1)';
        projectEl2.style.opacity = '1';
        projectEl2.style.transform = 'scale(1)';
        projectEl3.style.opacity = '1';
        projectEl3.style.transform = 'scale(1)';
        document.querySelector('.filter-btn--active').classList.remove('filter-btn--active');
        document.querySelector('.alleBtn').classList.add('filter-btn--active');
    }
});
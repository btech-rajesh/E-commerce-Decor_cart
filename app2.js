function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

function scrollLeft() {
    document.querySelector('.services-scroll').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.services-scroll').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

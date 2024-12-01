function showSection(sectionId) {
    
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    
    var activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}
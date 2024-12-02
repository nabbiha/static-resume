"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills');
    const skillsSection = document.getElementById('skills');
    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', () => {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
            }
            else {
                skillsSection.style.display = 'none';
            }
        });
    }
});

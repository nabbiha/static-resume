"use strict";

document.addEventListener('DOMContentLoaded', () => {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills');

    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', function () {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
            } else {
                skillsSection.style.display = 'none';
            }
        });
    }
});

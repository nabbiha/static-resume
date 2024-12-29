document.getElementById('toggle-skills').addEventListener('click', function() {
    var skillsDiv = document.getElementById('skills');
    if (skillsDiv.style.display === 'none') {
        skillsDiv.style.display = 'block';
    } else {
        skillsDiv.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
  const skillsSection = document.getElementById('skills') as HTMLElement;

  if (toggleButton && skillsSection) {
      toggleButton.addEventListener('click', () => {
          if (skillsSection.style.display === 'none') {
              skillsSection.style.display = 'block';
          } else {
              skillsSection.style.display = 'none';
          }
      });
  }
});

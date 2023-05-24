// Get references to the relevant elements
const mealtimeGamificationButton = document.querySelector('.mealtime-gamification-group');
const project2Button = document.querySelector('.project-name-2-container');
const project3Button = document.querySelector('.project-name-3-container');
const project4Button = document.querySelector('.project-name-4-container');
const project5Button = document.querySelector('.project-name-5-container');
const projectImage = document.querySelector('.group-child4');
const projectNameHeading = document.querySelector('.mealtime-gamification3');
const projectDescription = document.querySelector('.lorem-ipsum-dolor1');

function removeActiveClass() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
      button.classList.remove('active');
      button.style.color = '#707070'; // Reset text color to previous value
    });
  }
// Add click event listeners to the buttons
mealtimeGamificationButton.addEventListener('click', function() {
  // Update image source, heading, and description
  console.log(1)
  removeActiveClass();
  mealtimeGamificationButton.classList.add('active');
  mealtimeGamificationButton.style.color = 'green';
  projectImage.src = './public/mealtime-gamification-image.jpg';
  projectNameHeading.textContent = 'Mealtime Gamification';
  projectDescription.textContent = 'Description for Mealtime Gamification project.';
});

project2Button.addEventListener('click', function() {
  // Update image source, heading, and description
  removeActiveClass();
  project2Button.classList.add('active');
  project2Button.style.color = 'green';
  projectImage.src = './public/project2-image.jpg';
  projectNameHeading.textContent = 'Project Name 2';
  projectDescription.textContent = 'Description for Project Name 2.';
});

project3Button.addEventListener('click', function() {
  // Update image source, heading, and description
  removeActiveClass();
  project3Button.classList.add('active');
  project3Button.style.color = 'green';
  projectImage.src = './public/project3-image.jpg';
  projectNameHeading.textContent = 'Project Name 3';
  projectDescription.textContent = 'Description for Project Name 3.';
});

project4Button.addEventListener('click', function() {
  // Update image source, heading, and description
  removeActiveClass();
  project4Button.classList.add('active');
  project4Button.style.color = 'green';
  projectImage.src = './public/project4-image.jpg';
  projectNameHeading.textContent = 'Project Name 4';
  projectDescription.textContent = 'Description for Project Name 4.';
});

project5Button.addEventListener('click', function() {
  // Update image source, heading, and description
  removeActiveClass();
  project5Button.classList.add('active');
  project5Button.style.color = 'green'; 
  projectImage.src = './public/project5-image.jpg';
  projectNameHeading.textContent = 'Project Name 5';
  projectDescription.textContent = 'Description for Project Name 5.';
});

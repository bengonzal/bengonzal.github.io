function selectSeason(season) {
    var seasonMessageElement = document.getElementById("seasonMessage");
    let seasonMessage;
    let backgroundColor; 
  
    switch (season) {
      case 'summer':
        seasonMessage = 'It\'s time for a summer camping trip!';
        backgroundColor = 'var(--summer)';
        break;
      case 'spring':
        seasonMessage = 'Spring is a great season for camping!';
        backgroundColor = 'var(--spring)';
        break;
      case 'fall':
        seasonMessage = 'Enjoy the beautiful colors of fall during your camping trip!';
        backgroundColor = 'var(--fall)';
        break;
      case 'winter':
        seasonMessage = 'Bundle up and have a cozy winter camping adventure!';
        backgroundColor = 'var(--winter)';
        break;
      default:
        seasonMessage = 'Invalid season selection';
        backgroundColor = 'white';
    }
    
    seasonMessageElement.textContent = seasonMessage;
    document.body.style.backgroundColor = backgroundColor; 
  }


function selectSection(sectionIdInput) {
  // remove "Input" from sectionId
  let sectionId = sectionIdInput.replace("Input", '');

  // remove 'active' class from all content sections
  document.querySelectorAll('.content').forEach((section) => {
    section.classList.remove('active');
  });

  // add 'active' class to the selected content section
  document.getElementById(sectionId).classList.add('active');

  // scroll to the selected content section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.scrollIntoView({ behavior: 'smooth', block: 'start'});
} 
function selectSeason(season) {
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
    
    document.body.style.backgroundColor = backgroundColor; 
  }
  
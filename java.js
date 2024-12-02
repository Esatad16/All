// Function to store which link was clicked
function storeStyle(event) {
    const clickedLink = event.target;
    
    // Store the link's index and class in localStorage
    const links = document.querySelectorAll('.music-link');
    const index = Array.from(links).indexOf(clickedLink);
    
    localStorage.setItem('clickedLinkIndex', index);
    localStorage.setItem('clickedLinkClass', 'active-link');
    
    // Apply styles to the clicked link
    applyStyles(index);
}

// Function to apply styles based on stored data
function applyStyles(index) {
    const links = document.querySelectorAll('.music-link');
    
    // Remove 'active-link' class from all links
    links.forEach(link => link.classList.remove('active-link'));
    
    // Add 'active-link' class to the clicked link
    //if (index >= 0 && index < links.length) {
      //  links[index].classList.add('active-link');
  //  }
}

// On page load, check if a style was stored
document.addEventListener('DOMContentLoaded', () => {
    const storedIndex = localStorage.getItem('clickedLinkIndex');
    if (storedIndex !== null) {
        applyStyles(parseInt(storedIndex, 10));
    }
});

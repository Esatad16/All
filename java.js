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

// For menu part
// Function to toggle the visibility of the dropdown menu
function toggleMenu() {
        var menu = document.getElementById('menu');
        // Toggle the display property to show or hide the menu
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
  
// Function to show the corresponding content
function showContent(contentId) {
        // Hide all content sections
        var allContent = document.querySelectorAll('.content');
        allContent.forEach(function(content) {
          content.style.display = "none";
        });
  
        // Show the selected content
        var contentToShow = document.getElementById(contentId);
        if (contentToShow) {
          contentToShow.style.display = "block";
        }
  
        // Close the menu after selecting a content
        document.getElementById('menu').style.display = "none";
}

// JavaScript function to display a greeting
function showGreeting() {
        var greetingText = document.getElementById('greeting');
        greetingText.style.display = 'block';  // Show the greeting text
        greetingText.innerHTML = 'Hello, welcome to our website! We hope you enjoy your stay! ';
      }
      document.addEventListener("DOMContentLoaded", () => {
        console.log("Home Page Loaded!");
});

// Toggle Sidebar Visibility
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  content.classList.toggle('full-width');
});

// Dropdown Toggle Functionality
document.querySelector('.dropdown-btn').addEventListener('click', function () {
  const dropdownMenu = this.nextElementSibling;
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});
      

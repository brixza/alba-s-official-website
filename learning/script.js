/**
 * ALBA Music Website - JavaScript
 * This file contains all the interactive functionality for the website
 */

// ==================== ACCORDION FUNCTIONALITY ====================
/**
 * Toggle accordion item open/closed
 * @param {HTMLElement} button - The accordion trigger button that was clicked
 */
function toggleAccordion(button) {
  // Get the parent accordion item
  const item = button.closest('.accordion__item');
  
  // Check if this item is already active
  const isActive = item.classList.contains('active');
  
  // Close all accordion items first (for "single open" behavior)
  const allItems = document.querySelectorAll('.accordion__item');
  allItems.forEach(function(accordionItem) {
    accordionItem.classList.remove('active');
  });
  
  // If the clicked item wasn't active, open it
  if (!isActive) {
    item.classList.add('active');
  }
}

// ==================== SMOOTH SCROLL FOR NAVIGATION ====================
/**
 * Set up smooth scrolling for all navigation links
 */
document.addEventListener('DOMContentLoaded', function() {
  // Get all links that start with #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Get the target section ID from the href
      const targetId = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (targetId === '#') return;
      
      // Find the target element
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Prevent default anchor behavior
        event.preventDefault();
        
        // Smooth scroll to the target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// ==================== NEWSLETTER FORM ====================
/**
 * Handle newsletter form submission
 */
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.querySelector('.newsletter__form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
      // Prevent actual form submission
      event.preventDefault();
      
      // Get the email input
      const emailInput = this.querySelector('.newsletter__input');
      const email = emailInput.value.trim();
      
      // Basic email validation
      if (email && isValidEmail(email)) {
        // In a real application, you would send this to your server
        alert('Thanks for subscribing! We\'ll keep you updated.');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }
});

/**
 * Validate email format
 * @param {string} email - The email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidEmail(email) {
  // Simple email regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
/**
 * Animate elements when they come into view
 * This is an optional enhancement for scroll-based animations
 */
document.addEventListener('DOMContentLoaded', function() {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    // Create an observer
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Add a class when element is visible
          entry.target.classList.add('is-visible');
          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px' // Slight offset from bottom
    });
    
    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      observer.observe(section);
    });
  }
});

// ==================== MOBILE MENU (Optional Enhancement) ====================
/**
 * This is a placeholder for mobile menu functionality
 * In the React version, this would be handled with state
 */
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav__links');
  if (navLinks) {
    navLinks.classList.toggle('nav__links--open');
  }
}

// ==================== CONSOLE MESSAGE ====================
console.log('%c🎵 ALBA Music Website', 'font-size: 24px; font-weight: bold; color: #d4a853;');
console.log('%cBuilt with HTML, CSS & JavaScript', 'font-size: 14px; color: #8a8175;');
console.log('%cFor learning purposes - check out the React version at Lovable!', 'font-size: 12px; color: #8a8175;');

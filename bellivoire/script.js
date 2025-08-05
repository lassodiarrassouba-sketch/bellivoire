/*
 * Basic interactivity for the Bellivoire site.
 *
 * Currently this script handles the mobile navigation toggle.
 * If you wish to add more interactivity (e.g. search, filtering),
 * feel free to extend this file. Keeping the script lightweight
 * ensures fast page loads, especially important for visitors
 * with slower connections.
 */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('header nav');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
});
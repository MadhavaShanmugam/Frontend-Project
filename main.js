//  Script to remove toggle on click
    document.addEventListener("DOMContentLoaded", function () {
      const navbarCollapse = document.getElementById("collapsibleNavbar");
      const navLinks = navbarCollapse.querySelectorAll(".nav-link");
  
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          // Collapse the navbar when a link is clicked
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false,
          });
          bsCollapse.hide();
        });
      });
    });


//     // Select all navigation links
// const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// // Loop through each link and add a click event listener
// navLinks.forEach(link => {
//   link.addEventListener('click', function () {
//     // Remove 'active' class from all links
//     navLinks.forEach(link => link.classList.remove('active'));
    
//     // Add 'active' class to the clicked link
//     this.classList.add('active');
//   });
// });

// scroll section activelink
// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header navbar a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navlinks.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         }
//     });
//     };
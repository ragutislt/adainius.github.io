/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Add required classes for jekyll-toc navbar to appear as a bootstrap navbar
    document.querySelectorAll("#navbarResponsiveToc .navbar-nav .nav-item a")
        .forEach(item => item.classList.add("nav-link"));

    // Add ids to headings to act as anchors
    document.querySelectorAll("h2")
        .forEach(item => item.id = item.textContent.toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll("/", "")
            .replaceAll(":", "")
            .replaceAll("?", ""));

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsiveToc .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

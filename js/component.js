// component.js

//todo ======================== toggle (open and close) => side nav ========================
export function toggleNav() {
    const nav = document.querySelector("nav");
    const sideNav = document.querySelector(".side-nav");
    const menuItems = document.querySelectorAll(".menu ul li");
    const navMenuIcon = document.querySelector(".nav-menu");
    const contact = document.querySelector('#contact');


    if (sideNav.classList.contains("open")) {
        sideNav.classList.remove("open");
        nav.classList.remove("shift");
        hero.classList.remove("shift");
        contact.classList.remove("shift");
        menuItems.forEach(item => item.classList.remove("show"));
        navMenuIcon.innerHTML = `<i class="fa-solid fa-align-justify text-black"></i>`;
    } else {
        sideNav.classList.add("open");
        nav.classList.add("shift");
        hero.classList.add("shift");
        contact.classList.add("shift");
        menuItems.forEach(item => item.classList.add("show"));
        navMenuIcon.innerHTML = `<i class="fa-solid fa-xmark text-black"></i>`;
    }
}


//todo==========================  cards  ==============================
import { cardsValidation } from "./validation.js"

export function display(movies) {
    let imgPath = 'https://image.tmdb.org/t/p/w500';
    let card = '';

    for (let movie of movies) {
        const { movieImage, movieTitle, movieOverView, movieRelease, stars } = cardsValidation(movie, imgPath);

        card += `
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4 animate__animated">
        <div class="item overflow-hidden position-relative">
          <div class="cardImage">
            <img src="${movieImage}" class="img-fluid">
          </div>
          <div class="overlay overflow-hidden">
            <h1 class="animate__animated title">${movieTitle}</h1>    
            <p class="animate__animated desc">${movieOverView}</p>
            <p class="animate__animated date">
              <span class="fst-normal">Release Date</span> : ${movieRelease}
            </p>
            <h3 class="rate animate__animated">${stars}</h3>
            <h3 class="rate animate__animated vote">${movie.vote_average.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    `;
    }

    $('#hero .row').html(card);

    // Apply animations & hover
    $('#hero .item').addClass("animate__fadeIn");
    $('#hero .item').mouseenter(cardHoverIn);
    $('#hero .item').mouseleave(cardHoverOut);
}

//todo==========================  Card Hover  ==============================
function cardHoverIn() {
    const $overlay = $(this).find('.overlay');
    $overlay.css({ "opacity": "1", "visibility": "visible" });

    $overlay.find('.title').removeClass('animate__slideOutLeft').addClass('animate__fadeInDown animate__delay-0s');
    $overlay.find('.desc').removeClass('animate__slideOutLeft').addClass('animate__flipInX animate__delay-0s');
    $overlay.find('.date').removeClass('animate__slideOutLeft').addClass('animate__fadeInUp animate__delay-0s');
    $overlay.find('.rate').removeClass('animate__slideOutLeft').addClass('animate__fadeInUp animate__delay-0s');

    $(this).find('.cardImage img').addClass("animate");
}

function cardHoverOut() {
    const $overlay = $(this).find('.overlay');
    $overlay.css({ "opacity": "0", "visibility": "hidden" });

    $overlay.find('.title').removeClass('animate__fadeInDown animate__delay-0s').addClass('animate__slideOutLeft');
    $overlay.find('.desc').removeClass('animate__flipInX animate__delay-0s').addClass('animate__slideOutLeft');
    $overlay.find('.date').removeClass('animate__fadeInUp animate__delay-0s').addClass('animate__slideOutLeft');
    $overlay.find('.rate').removeClass('animate__fadeInUp animate__delay-0s').addClass('animate__slideOutLeft');

    $(this).find('.cardImage img').removeClass("animate");
}

//todo==========================  BackToTop  ==============================
export function BackToTop() {

    function backToTopHandler() {
        if (window.pageYOffset > 100) {
            $('#back-to-top').addClass("active");
        } else {
            $('#back-to-top').removeClass("active");
        }
    }

    $(window).on('scroll', backToTopHandler);

    $("#back-to-top").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1500);
    });
}




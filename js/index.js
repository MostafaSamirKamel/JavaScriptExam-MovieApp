// index.js

// ======================= toggle (open and close) => side nav =======================
import { toggleNav } from "./component.js";
$('.nav-menu').click(toggleNav);

// ======================= Move Between page =======================
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const pageNumber = document.getElementById('page-number');
let page = 1;
let currentEndpoint = "movie/now_playing";
let currentSearch = "";

// Arrow click 
arrowLeft.addEventListener('click', () => {
    if (page > 1) {
        page--;
        pageNumber.innerHTML = page;
    }
    if (currentSearch) {
        searchMovie(currentSearch, page);
    } else {
        getMovie(currentEndpoint, page);
    }
     $('html, body').animate({ scrollTop: 0 }, 1500);
});

arrowRight.addEventListener('click', () => {
    page++;
    pageNumber.innerHTML = page;
    if (currentSearch) {
        searchMovie(currentSearch, page);
    } else {
        getMovie(currentEndpoint, page);
    }
     $('html, body').animate({ scrollTop: 0 }, 1500);
    
});

// ======================= Fetch Movies ========================
import { getMovie } from "./api.js";

const endpoints = {
    now_playing: "movie/now_playing",
    popular: "movie/popular",
    top_rated: "movie/top_rated",
    trending: "trending/movie/week",
    upcoming: "movie/upcoming"
};

document.querySelectorAll('.menu a[data-ref]').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        page = 1;
        currentEndpoint = endpoints[item.dataset.ref];
        getMovie(currentEndpoint, page);
        pageNumber.innerHTML = page;
    });
});

// Load default endpoint (now_playing)
getMovie(currentEndpoint, page);

// ======================= Search Movie =======================
import { searchMovie } from "./api.js";

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (e) => {
    page = 1;
    currentSearch = e.target.value;

    if (currentSearch === "") {
        currentSearch = "";
        pageNumber.innerHTML = page;
        getMovie(currentEndpoint, page);
    } else {
        searchMovie(currentSearch, page);
        pageNumber.innerHTML = page;
    }
});


// ======================= Loading screen =======================
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.style.transition = "opacity 2s";
        loading.style.opacity = 0;
        setTimeout(() => {
            loading.style.display = "none";
        }, 2000);
    }
});

// ======================= Back To Top =========================
import { BackToTop } from "./component.js";
BackToTop();

// ======================= Form Validations ====================
import { formValidations } from "./validation.js";

$(document).ready(function () {
    formValidations();
});





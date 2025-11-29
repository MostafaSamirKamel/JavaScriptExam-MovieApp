# JavaScriptExam-MovieApp
---
# Movie Web App 🎬

A modern, fully responsive **Movie Web Application** that enables users to explore, search, and navigate through movies using the **TMDB API**. The application features dynamic movie browsing, real-time search, client-side pagination, and a fully validated contact form.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Key Features](#key-features)  
- [Technologies & Libraries](#technologies--libraries)  
- [API Integration](#api-integration)  
- [Installation & Setup](#installation--setup)  
- [Usage](#usage)  
- [Responsive Design](#responsive-design)  
- [Form Validation](#form-validation)  
- [Pagination System](#pagination-system)  
- [Animations & UI](#animations--ui)  
- [Project Structure](#project-structure)  
- [Screenshots](#screenshots)  
- [License](#license)  
- [Author](#author)  

---

## Project Overview

The **Movie Web App** is designed to provide an engaging experience for movie enthusiasts. Users can:

- Browse movies by predefined categories (`Now Playing`, `Popular`, `Top Rated`, `Trending`, `Upcoming`).  
- Search for movies dynamically with real-time results.  
- Navigate between pages of results with a user-friendly pagination system.  
- Interact with a contact form featuring **instant input validation** and **animated error messages**.  
- Experience a modern, responsive, and animated interface across devices.

This project is **frontend-only** and fetches all movie data from **The Movie Database (TMDB) API**.

---

## Key Features

### Movie Browsing
- Default category: `Now Playing`.
- Categories available: `Popular`, `Top Rated`, `Trending`, `Upcoming`.
- Fetches 20 movies per page with pagination support.

### Search Functionality
- Real-time movie search while typing.
- Automatic fallback to default category when the search input is cleared.

### Pagination
- Navigate pages using arrow buttons (`<` and `>`).
- Works for both category browsing and search results.
- Page limits respect TMDB API constraints for each endpoint.

### Responsive Design
- Optimized for phones, tablets, desktops, and large screens.
- Adaptive card layouts: 1 card per row on phones, 2 cards per row on tablets, 3+ cards per row on desktops.

### Form Validation
- Fields: Name, Email, Phone, Age, Password, Confirm Password.
- Real-time inline validation using **jQuery** and **Regex**.
- Error messages animated with **Animate.css**.
- Submit button disabled until all fields are valid.

### Animations & UI
- Smooth loading screen fade-out.
- Password show/hide toggle.
- Form error shake animation.
- Interactive submit button with animated feedback.

---

## Technologies & Libraries

- **HTML5 & CSS3** – Layout and responsive styling.  
- **JavaScript (ES6 Modules)** – API calls, DOM manipulation, and pagination logic.  
- **jQuery** – Simplified event handling and DOM traversal.  
- **Animate.css** – For smooth, modern animations.  
- **Bootstrap 5** – Grid system and responsive design utilities.  
- **Font Awesome** – Iconography.  
- **TMDB API** – Movie data backend.  

---

## API Integration

The app uses **TMDB API** to fetch movie data.  

| Category       | Endpoint                   | Total Pages | Items per Page |
|----------------|----------------------------|-------------|----------------|
| Popular        | `movie/popular`            | 500         | 20             |
| Now Playing    | `movie/now_playing`        | 50          | 20             |
| Top Rated      | `movie/top_rated`          | 500         | 20             |
| Trending (Day) | `trending/movie/day`       | Varies      | 20             |
| Upcoming       | `movie/upcoming`           | 500         | 20             |

**Note:** The API key is required to fetch the data. Make sure to replace `API_KEY` in `api.js` with your TMDB key.

---

## Installation & Setup

1. **Clone the repository**:
```bash
git clone https://github.com/MostafaSameerKamel/movie-web-app.git


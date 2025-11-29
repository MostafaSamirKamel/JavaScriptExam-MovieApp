# JavaScriptExam-MovieApp
Perfect! Here’s a **clean, professional README.md** structure using exactly the sections you listed, with polished content under each heading. I kept it formal and GitHub-friendly:

---

````markdown
# Movie Web App 🎬

A fully responsive **Movie Web Application** that allows users to explore, search, and navigate through movies using the **TMDB API**. The app features dynamic browsing, real-time search, pagination, and a validated contact form.

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
- [Author](#author)  

---

## Project Overview

The **Movie Web App** provides an engaging platform for movie enthusiasts to:

- Browse movies by categories (`Now Playing`, `Popular`, `Top Rated`, `Trending`, `Upcoming`).  
- Search for movies dynamically with real-time results.  
- Navigate pages of results using an intuitive pagination system.  
- Fill out a contact form with instant validation feedback.  

All data is fetched from the **TMDB API**, making the application fully frontend-based.

---

## Key Features

- Browse movies by predefined categories.  
- Dynamic search with instant results.  
- Pagination with page limits respecting TMDB API constraints.  
- Responsive layout for phones, tablets, desktops, and large screens.  
- Animated input validation for contact form fields.  
- Password toggle functionality for improved user experience.  

---

## Technologies & Libraries

- **HTML5 & CSS3** – Layout and responsive styling.  
- **JavaScript (ES6 Modules)** – DOM manipulation, API calls, and pagination logic.  
- **jQuery** – Event handling and DOM traversal.  
- **Animate.css** – Smooth animations for UI feedback.  
- **Bootstrap 5** – Responsive grid system.  
- **Font Awesome** – Icons for UI elements.  

---

## API Integration

The app fetches movie data from **TMDB API**.  

| Category       | Endpoint                   | Total Pages | Items per Page |
|----------------|----------------------------|-------------|----------------|
| Popular        | `movie/popular`            | 500         | 20             |
| Now Playing    | `movie/now_playing`        | 50          | 20             |
| Top Rated      | `movie/top_rated`          | 500         | 20             |
| Trending/Day   | `trending/movie/day`       | Varies      | 20             |
| Upcoming       | `movie/upcoming`           | 500         | 20             |

> **Note:** Replace `API_KEY` in `api.js` with your TMDB API key.

---

## Installation & Setup

1. **Clone the repository**:
```bash
git clone https://github.com/your-username/movie-web-app.git
````

2. **Navigate to the project folder**:

```bash
cd movie-web-app
```

3. **Open `index.html`** in your browser.
   *(No backend server required, fully frontend.)*

---

## Usage

* **Browse Movies**: Click the sidebar menu to switch categories.
* **Search Movies**: Type in the search bar for real-time results.
* **Pagination**: Use arrow buttons to navigate between pages.
* **Contact Form**: Fill out fields with live validation and submit.
* **Password Toggle**: Click the eye icon to show/hide password inputs.

---

## Responsive Design

* **Phones (<480px)**: 1 movie card per row; sidebar minimized.
* **Small Phones (480px–767px)**: 1 card per row; sidebar partially visible.
* **Tablets (768px–991px)**: 2 cards per row.
* **Desktops (992px–1199px)**: 3 cards per row.
* **Large Screens (≥1200px)**: 3+ cards per row with appropriate spacing.

---

## Form Validation

* **Fields**: Name, Email, Phone, Age, Password, Confirm Password.
* **Validation**: Uses **Regex** for real-time input validation.
* **Feedback**: Errors appear inline with animation.
* **Submit Button**: Disabled until all fields are valid.

---

## Pagination System

* Tracks **current page** for both categories and search results.
* Arrow buttons (`<` and `>`) navigate pages.
* Prevents navigation beyond available pages.

---

## Animations & UI

* **Loading Screen**: Fades out smoothly on page load.
* **Error Animations**: Inputs shake when invalid.
* **Button Feedback**: Submit button shakes if form is invalid.
* **Password Toggle**: Eye icon switches between show/hide password.

---

## Project Structure

```
movie-web-app/
│
├─ index.html
├─ style.css
├─ js/
│  ├─ index.js          # Main JS logic
│  ├─ api.js            # TMDB API calls
│  ├─ component.js      # UI components & sidebar
│  └─ validation.js     # Form validation
└─ assets/
   ├─ images/
   └─ icons/
```

---

## Screenshots

**Homepage**
![Homepage](assets/screenshots/homepage.png)

**Movie List**
![Movie List](assets/screenshots/movie-list.png)

**Contact Form Validation**
![Form Validation](assets/screenshots/form-validation.png)

---

## Author

**Your Name** – [GitHub](https://github.com/your-username)

```

---

This version is **clean, professional, GitHub-ready**, and matches your requested Table of Contents exactly.  

If you want, I can also **add badges for License, Last Commit, and Live Demo** to make it even more professional and visually appealing for GitHub.  

Do you want me to do that?
```

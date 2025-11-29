# JavaScriptExam-MovieApp
:Absolutely! Here’s a **refined, more professional README.md** for your **JavaScriptExam-MovieApp**, with comments added for CSS files and polished wording throughout:

---

# JavaScriptExam-MovieApp 🎬

A fully responsive **Movie Web Application** that allows users to browse, search, and navigate through movies using the **TMDB API**.  
The application features dynamic browsing, real-time search, pagination, form validation, and animated user interface elements for an engaging user experience.

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

**JavaScriptExam-MovieApp** is designed for movie enthusiasts who want a seamless experience exploring movies:  

- Browse movies by categories such as `Now Playing`, `Popular`, `Top Rated`, `Trending`, and `Upcoming`.  
- Search for movies dynamically with real-time feedback.  
- Navigate through multiple pages of movie results with an intuitive pagination system.  
- Interact with a fully validated contact form with animated feedback.  

All movie data is retrieved from the **TMDB API**, making this a fully frontend-based solution with no server required.

---

## Key Features

- Category-based movie browsing.  
- Dynamic search functionality.  
- Pagination system adhering to TMDB API page limits.  
- Responsive layout for all screen sizes (mobile, tablet, desktop).  
- Animated input validation and error messages in the contact form.  
- Show/hide password functionality for improved user experience.  

---

## Technologies & Libraries

- **HTML5 & CSS3** – Structure and styling of the app.  
- **JavaScript (ES6 Modules)** – Core functionality including API calls, search, and pagination.  
- **jQuery** – Simplified DOM manipulation and event handling.  
- **Animate.css** – Smooth animations for UI feedback.  
- **Bootstrap 5** – Grid system for responsive layout.  
- **Font Awesome** – Icons for UI components such as the password toggle.

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
git clone https://github.com/MostafaSamirKamel/JavaScriptExam-MovieApp.git
````

2. **Navigate to the project folder**:

```bash
cd JavaScriptExam-MovieApp
```

3. **Open `index.html`** in your browser.
   *(No backend server required, fully frontend.)*

---

## Usage

* **Browse Movies**: Click on the sidebar menu to select categories.
* **Search Movies**: Type in the search bar for instant results.
* **Pagination**: Use the left/right arrows to navigate between pages.
* **Contact Form**: Fill out all fields with live validation before submitting.
* **Password Toggle**: Click the eye icon to show or hide the password.

---

## Responsive Design

* **Phones (<480px)**: Single movie card per row; minimized sidebar.
* **Small Phones (480px–767px)**: One movie card per row; sidebar partially visible.
* **Tablets (768px–991px)**: Two movie cards per row.
* **Desktops (992px–1199px)**: Three movie cards per row.
* **Large Screens (≥1200px)**: Three or more movie cards per row with spacing.

---

## Form Validation

* **Fields**: Name, Email, Phone, Age, Password, Confirm Password.
* **Validation**: Real-time regex validation for all fields.
* **Feedback**: Inline animated error messages for invalid inputs.
* **Submit Button**: Disabled until all inputs are valid, with animated shaking for invalid submission attempts.

---

## Pagination System

* Tracks **current page** for both category browsing and search results.
* Arrow buttons (`<` and `>`) allow seamless navigation.
* Prevents navigation beyond available pages.

---

## Animations & UI

* **Loading Screen**: Smooth fade-out on page load.
* **Error Animations**: Input fields shake on invalid entry.
* **Submit Button**: Shakes when form contains errors.
* **Password Toggle**: Eye icon switches between show/hide password.

---

## Project Structure

```
JavaScriptExam-MovieApp/
│
├─ index.html
├─ js/
│  ├─ index.js          # Main app logic (DOM handling, pagination, search)
│  ├─ api.js            # TMDB API integration
│  ├─ component.js      # Sidebar and UI components
│  └─ validation.js     # Form validation logic
└─ css/
   ├─ all.min.css          # Font Awesome
   ├─ animate.min.css      # Animate.css for UI animations
   ├─ bootstrap.min.css    # Bootstrap grid and responsive utilities
   ├─ media_query.css      # Custom responsive styling
   └─ style.css            # Main app styles and custom UI
└─ img/                    # Images and screenshots
```

---

## Screenshots

**Homepage**
![Homepage](./img/Move%20App.png)

**Movie List**
![Movie List](./img/movie-list.png)

**Form Validation**
![Form Validation](./img/form-validation.png)

---

## Author

**Mostafa Samir** – [GitHub](https://github.com/MostafaSamirKamel)

---

// validation.js

//todo==========================  cards validation ==============================
export function cardsValidation(movie, imgPath) {
    let movieImage, movieTitle, movieOverView, movieRelease, stars;

    // Image
    if (!movie.poster_path && !movie.backdrop_path) {
        movieImage = "../img/default-movie.jpg";
    } else if (!movie.poster_path && movie.backdrop_path) {
        movieImage = imgPath + movie.backdrop_path;
    } else {
        movieImage = imgPath + movie.poster_path;
    }

    // Title
    if (movie.hasOwnProperty('title')) {
        movieTitle = movie.title;
    } else if (movie.hasOwnProperty('name')) {
        movieTitle = movie.name;
    } else {
        movieTitle = "Unknown Title";
    }

    // Description
    if (!movie.overview) {
        movieOverView = "No description available.";
    } else if (movie.overview.length > 300) {
        movieOverView = movie.overview.slice(0, 300) + "...";
    } else {
        movieOverView = movie.overview;
    }

    // Release date
    if (movie.hasOwnProperty('release_date')) {
        movieRelease = movie.release_date;
    } else if (movie.hasOwnProperty('first_air_date')) {
        movieRelease = movie.first_air_date;
    } else {
        movieRelease = "Release Date Unknown";
    }

    // Vote
    let vote = movie.vote_average / 2;
    let fullStars = Math.floor(vote);
    let halfStar = vote % 1 >= 0.5 ? 1 : 0;

    stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
    }

    if (halfStar) {
        stars += `<i class="fa-solid fa-star-half-stroke text-warning fs-6"></i>`;
    }

    return { movieImage, movieTitle, movieOverView, movieRelease, stars };
}


//todo==========================  Form validation ==============================
export function formValidations() {
    const $form = $('#contact');
    const $inputs = $form.find('input');
    const $button = $form.find('button');

    // Regex patterns
    const patterns = {
        name: /^[a-zA-Z\s]{1,36}$/,
        email: /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/,
        phone: /^(02)?(01)[0125][0-9]{8}$/,
        age: /^(1[6-9]|[2-9][0-9]|100)$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    };

    const errors = {
        name: "Invalid Name, only characters allowed",
        email: "Invalid Email, try example@domain.com",
        phone: "Invalid Phone Number",
        age: "Your age must be between 16 and 100",
        password: "Password must contain letters & numbers at least 8 chars",
        repassword: "Password does not match"
    };

    // Show/hide password
    $('.showPass').click(function () {
        const $input = $(this).siblings('input');
        const type = $input.attr('type') === 'text' ? 'password' : 'text';
        $input.attr('type', type);
        $(this).html(type === 'text'
            ? '<i data-show="show" class="fa-solid fa-eye-slash"></i>'
            : '<i data-show="show" class="fa-solid fa-eye"></i>');
    });

    $('#password').focus(() => {
        $('.showPass').css({ opacity: 1, bottom: '10px' });
    });

    $(document).click(function (e) {
        if ($(e.target)[0] === $('#password')[0] || $(e.target).attr('data-show') === $('.showPass i').attr('data-show')) {
            $('.showPass').css({ opacity: 1, bottom: '10px' });
        } else {
            $('.showPass').css({ opacity: 0, bottom: '-20px' });
        }
    });

    // Error functions
    function showError($error, $input, message) {
        $input.css("border-bottom-color", "rgb(214, 46, 51)");
        $error.html(message);
        $error.removeClass('animate__fadeOutUp').addClass('animate__animated animate__flipInX');
    }

    function hideError($error, $input) {
        $input.css("border-bottom-color", "#CED4DA");
        $error.html('');
        $error.removeClass('animate__flipInX').addClass('animate__animated animate__fadeOutUp');
    }

    function checkClassError() {
        return $('#contact .error').hasClass('animate__flipInX');
    }

    function toggleButton() {
        if (checkClassError()) {
            $button.addClass('animate__shakeX bg-danger buttonFormActive')
                .css({ cursor: 'default', userSelect: 'none' })
                .on('mouseenter', formButtonValidation);
        } else {
            $button.removeClass('animate__shakeX bg-danger buttonFormActive')
                .css({ marginLeft: '0px', cursor: 'pointer' })
                .off('mouseenter', formButtonValidation);
        }
    }

    function formButtonValidation(e) {
        e.preventDefault();
        let margin = $button.css("marginLeft") === "250px" ? "0px" : "250px";
        $button.css({ marginLeft: margin });
    }

    // Input validation
    $inputs.on("input", function () {
        const $this = $(this);
        const $error = $this.next();

        switch ($this.attr('id')) {
            case 'name':
                $this.val() === "" || patterns.name.test($this.val())
                    ? hideError($error, $this)
                    : showError($error, $this, errors.name);
                break;
            case 'email':
                $this.val() === "" || patterns.email.test($this.val())
                    ? hideError($error, $this)
                    : showError($error, $this, errors.email);
                break;
            case 'phone':
                $this.val() === "" || patterns.phone.test($this.val())
                    ? hideError($error, $this)
                    : showError($error, $this, errors.phone);
                break;
            case 'age':
                $this.val() === "" || patterns.age.test($this.val())
                    ? hideError($error, $this)
                    : showError($error, $this, errors.age);
                break;
            case 'password':
                $this.val() === "" || patterns.password.test($this.val())
                    ? hideError($error, $this)
                    : showError($error, $this, errors.password);
                break;
            case 'repassword':
                $this.val() === "" || $this.val() === $('#password').val()
                    ? hideError($error, $this)
                    : showError($error, $this, errors.repassword);
                break;
        }

        toggleButton();
    });

    // Prevent submit if there are errors
    $form.on('submit', function (e) {
        let hasError = false;
        $inputs.each(function () {
            const $this = $(this);
            const $error = $this.next();
            if ($error.hasClass('animate__flipInX')) {
                hasError = true;
            }
        });

        if (hasError) {
            e.preventDefault();
            toggleButton();
        } else {
            e.preventDefault();
            alert("Form submitted successfully!");
            $form[0].reset();
            $inputs.each(function () {
                $(this).next().html('').removeClass('animate__flipInX animate__fadeOutUp');
                $(this).css("border-bottom-color", "#CED4DA");
            });
            toggleButton();
        }
    });
}
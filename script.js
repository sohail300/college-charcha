// function openPopup() {
//     document.getElementById('callPopup').style.display = 'flex';
// }

// function closePopup() {
//     document.getElementById('callPopup').style.display = 'none';
// }

// Form submission
// document.getElementById('getacall-form').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get form data
//     const formData = {
//         name: document.getElementById('popup-name').value,
//         phone: document.getElementById('popup-phone').value,
//     };

//     let flag = 0;

//     if (formData.name === '') {
//         flag = 1;
//         outError("Please enter name");
//     }

//     if (formData.phone === '') {
//         flag = 1;
//         outError("Please enter phone number");
//     }

//     if (flag) {
//         return 0;
//     }

//     // Send form data to the backend
//     fetch('https://college-charcha-mmf7.onrender.com/api/getacall', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     })
//         .then(response => {
//             if (response.ok) {
//                 // Redirect to the new page
//                 window.location.href = 'thankyou.html';
//             } else {
//                 return response.json().then(error => { throw new Error(error.message); });
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// });

document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = {
        name: document.getElementById('register-name').value,
        email: document.getElementById('register-email').value,
        phone: document.getElementById('register-phone').value,
        college: document.getElementById('register-college').value,
    };

    let flag = 0;

    if (formData.name === '') {
        flag = 1;
        outError("Please enter name");
    }
    if (formData.email === '') {
        flag = 1;
        outError("Please enter email");
    }

    if (formData.phone === '') {
        flag = 1;
        outError("Please enter phone number");
    }

    if (formData.college === 'select') {
        flag = 1;
        outError("Please enter college");
    }

    if (flag) {
        return 0;
    }

    // Send form data to the backend
    fetch('https://college-charcha-mmf7.onrender.com/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (response.ok) {
                // Redirect to the new page
                window.location.href = 'thankyou.html';
            } else {
                return response.json().then(error => { throw new Error(error.message); });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

// document.getElementById('contact-form').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get form data
//     const formData = {
//         name: document.getElementById('contact-name').value,
//         email: document.getElementById('contact-email').value,
//         phone: document.getElementById('contact-phone').value,
//         message: document.getElementById('contact-message').value,
//     };

//     let flag = 0;

//     if (formData.name === '') {
//         flag = 1;
//         outError("Please enter name");
//     }
//     if (formData.email === '') {
//         flag = 1;
//         outError("Please enter email");
//     }

//     if (formData.phone === '') {
//         flag = 1;
//         outError("Please enter phone number");
//     }

//     if (formData.message === '') {
//         flag = 1;
//         outError("Please enter message");
//     }

//     if (flag) {
//         return 0;
//     }

//     // Send form data to the backend
//     fetch('https://college-charcha-mmf7.onrender.com/api/contactus', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     })
//         .then(response => {
//             if (response.ok) {
//                 // Redirect to the new page
//                 window.location.href = 'thankyou.html';
//             } else {
//                 return response.json().then(error => { throw new Error(error.message); });
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// });

// document.getElementById('newsletter-form').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get form data
//     const formData = {
//         email: document.getElementById('newsletter-email').value,
//     };

//     let flag = 0;

//     if (formData.email === '') {
//         flag = 1;
//         outError("Please enter email");
//     }

//     if (flag) {
//         return 0;
//     }

//     // Send form data to the backend
//     fetch('https://college-charcha-mmf7.onrender.com/api/newsletter', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     })
//         .then(response => {
//             if (response.ok) {
//                 // Redirect to the new page
//                 window.location.href = 'thankyou.html';
//             } else {
//                 return response.json().then(error => { throw new Error(error.message); });
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// });

// Error Message

const outError = (message) => {
    const errorCont = document.getElementById("errorCont");

    const errorBlock = document.createElement("div");
    errorBlock.classList.add("error-block");

    const data = `
        <div class="error-message">
            ${message}
        </div>
        <div class="line-div">
            <div class="line-runner"></div>
        </div>
    `;

    errorBlock.innerHTML = data;
    errorCont.appendChild(errorBlock);

    setTimeout(() => {
        errorBlock.remove();
    }, 4000);
};

// College Selection
document.getElementById('register-college').addEventListener('change', function () {
    const placeholderOption = this.querySelector('option[value="select"]');
    placeholderOption.disabled = true;
});

// Scroll Reveal
ScrollReveal().reveal('.hero-intro', {
    distance: '8%',
    origin: 'left',
    opacity: '0.1',
    easing: 'ease-in-out',
    duration: 800,
    scale: 1
});

ScrollReveal().reveal('.hero-img', {
    distance: '8%',
    origin: 'right',
    opacity: '0.1',
    easing: 'ease-in-out',
    duration: 800,
    scale: 1
});

ScrollReveal().reveal(".form-image-container", {
    duration: 800,
    origin: "top",
    distance: "400px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    rotate: {
        x: 20,
        z: -10
    }
});

ScrollReveal().reveal(".form", {
    duration: 800,
    origin: "bottom",
    distance: "400px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    rotate: {
        x: 20,
        z: -10
    }
});

ScrollReveal().reveal('.about-img', {
    distance: '8%',
    origin: 'left',
    opacity: '0.1',
    easing: 'ease-in-out',
    duration: 800,
    scale: 1
});

ScrollReveal().reveal('.about-text', {
    distance: '8%',
    origin: 'right',
    opacity: '0.1',
    easing: 'ease-in-out',
    duration: 800,
    scale: 1
});

ScrollReveal().reveal(".service-item h3", {
    duration: 1000,
    origin: "bottom",
    distance: "25%",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0.5,
    scale: 0.5
});

ScrollReveal().reveal(".service-item img", {
    duration: 1000,
    origin: "bottom",
    distance: "25%",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0.5,
    scale: 0.5
});

ScrollReveal().reveal('.features-glassmorphic', {
    distance: '25%',
    origin: 'bottom',
    opacity: '0.2',
    easing: 'ease-in-out',
    duration: 1200,
    scale: 0.1
});

ScrollReveal().reveal('.features-title', {
    distance: '25%',
    origin: 'bottom',
    opacity: '0.4',
    easing: 'ease-in-out',
    duration: 1200,
    scale: 0.1
});

ScrollReveal().reveal('.features-subtitle', {
    distance: '25%',
    origin: 'bottom',
    opacity: '0.4',
    easing: 'ease-in-out',
    duration: 1200,
    scale: 0.1
});

// ScrollReveal().reveal('.contact-img', {
//     distance: '8%',
//     origin: 'left',
//     opacity: '0.1',
//     easing: 'ease-in-out',
//     duration: 800,
//     scale: 1
// });

// ScrollReveal().reveal('.contact-form', {
//     distance: '8%',
//     origin: 'right',
//     opacity: '0.1',
//     easing: 'ease-in-out',
//     duration: 800,
//     scale: 1
// });
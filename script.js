function openPopup() {
    document.getElementById('callPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('callPopup').style.display = 'none';
}

const glbajaj = document.getElementById('glbabaj');

function openGlbajajPage() {
    window.location.href = 'GLBajaj.html';
}

function openBennettPage() {
    window.location.href = 'Bennett.html';
}

function openIILMPage() {
    window.location.href = 'IILM.html';
}

function openAmityPage() {
    window.location.href = 'Amity.html';
}

function openGalgotiasPage() {
    window.location.href = 'Galgotias.html';
}

function openJaypeePage() {
    window.location.href = 'Jaypee.html';
}

function openJSSPage() {
    window.location.href = 'JSS.html';
}

function submitForm(event) {
    event.preventDefault();
    window.location.href = 'thankyou.html';
}

// import axios from 'axios';
// console.log('inside script')
// const handleFormSubmission = async (formId, apiEndpoint) => {
//     const form = document.getElementById(formId);

//     form.addEventListener('submit', async (event) => {
//         event.preventDefault();

//         console.log('inside pre de')
//         // Get form data
//         const formData = new FormData(event.target);
//         const jsonData = {};
//         formData.forEach((value, key) => {
//             jsonData[key] = value;
//         });

//         try {
//             const response = await axios.post(apiEndpoint, jsonData);
//             console.log('Data sent successfully:', response.data);
//         } catch (error) {
//             console.error('Error sending data to the backend:', error);
//         }
//     });
// };

// const backendURL = 'https://college-charcha.onrender.com/'
// handleFormSubmission('register-form', backendURL);
// handleFormSubmission('getacall-form', backendURL);
// handleFormSubmission('contact-form', backendURL);
// handleFormSubmission('newsletter-form', backendURL);


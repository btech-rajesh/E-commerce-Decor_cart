// document.addEventListener("DOMContentLoaded", function() {
//     const authModal = document.getElementById("authModal");
//     const authBtn = document.getElementById("authBtn");
//     const closeBtn = document.querySelector("close");

//     const signInTab = document.getElementById("signInTab");
//     const signUpTab = document.getElementById("signUpTab");
//     const signInForm = document.getElementById("signInForm");
//     const signUpForm = document.getElementById("signUpForm");

//     // Open modal
//     authBtn.onclick = function(event) {
//         event.preventDefault();
//         authModal.style.display = "block";
//         showSignIn();
//     }

//     // Close modal
//     closeBtn.onclick = function() {
//         authModal.style.display = "none";
//     }

//     window.onclick = function(event) {
//         if (event.target == authModal) {
//             authModal.style.display = "none";
//         }
//     }

//     // Toggle forms
//     signInTab.onclick = function() {
//         showSignIn();
//     }

//     signUpTab.onclick = function() {
//         showSignUp();
//     }

//     function showSignIn() {
//         signInForm.classList.add("active");
//         signUpForm.classList.remove("active");
//         signInTab.classList.add("active");
//         signUpTab.classList.remove("active");
//     }

//     function showSignUp() {
//         signUpForm.classList.add("active");
//         signInForm.classList.remove("active");
//         signUpTab.classList.add("active");
//         signInTab.classList.remove("active");
//     }
// });
// JavaScript for toggling the Sign In/Sign Up Modal and tabs
// Tab switching functionality
document.getElementById('signInTab').addEventListener('click', function() {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('signUpTab').classList.remove('active');
});

document.getElementById('signUpTab').addEventListener('click', function() {
    document.getElementById('signUpForm').style.display = 'block';
    document.getElementById('signInForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('signInTab').classList.remove('active');
});

// Redirect functionality for SignIn/Up button
document.querySelector('.signBtn').addEventListener('click', function() {
    window.location.href = 'index.html';  // Redirect to index.html
});

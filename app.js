 // Chat functionality
 const chatButton = document.getElementById('chatButton');
 const chatWindow = document.getElementById('chatWindow');
 const closeChatButton = document.getElementById('closeChatButton');
 const chatMessages = document.getElementById('chatMessages');
 const messageInput = document.getElementById('messageInput');
 const sendMessageButton = document.getElementById('sendMessageButton');

 chatButton.addEventListener('click', () => {
     chatWindow.style.display = 'block';
 });

 closeChatButton.addEventListener('click', () => {
     chatWindow.style.display = 'none';
 });

 sendMessageButton.addEventListener('click', sendMessage);
 messageInput.addEventListener('keypress', (e) => {
     if (e.key === 'Enter') {
         sendMessage();
     }
 });

 function sendMessage() {
     const message = messageInput.value.trim();
     if (message) {
         const messageElement = document.createElement('p');
         messageElement.textContent = `You: ${message}`;
         chatMessages.appendChild(messageElement);
         messageInput.value = '';
         
         // Simulate a response (replace with actual backend integration later)
         setTimeout(() => {
             const responseElement = document.createElement('p');
             responseElement.textContent = 'Support: Thank you for your message. How can I assist you today? Or abhi iska Backed ni h to sorry';
             chatMessages.appendChild(responseElement);
             chatMessages.scrollTop = chatMessages.scrollHeight;
         }, 1000);
     }
 }

 // Form submission (replace with actual backend integration later)
 
 const integratedForm = document.getElementById('integratedForm');
 integratedForm.addEventListener('submit', (e) => {
     e.preventDefault();
     const item = document.getElementById('item').value;
     const service = document.getElementById('service').value;
     if (item && service) {
         alert(`Added to cart: ${item} with ${service} service`);
     } else {
         alert('Please select both an item and a service');
     }
 });

 // Add to cart functionality (replace with actual backend integration later)
 const addToCartButtons = document.querySelectorAll('.product-card .btn, .service-card .btn');
 addToCartButtons.forEach(button => {
     button.addEventListener('click', () => {
         const name = button.parentElement.querySelector('h3').textContent;
         alert(`Added to cart: ${name}`);
     });
 });

 let header=document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('active',window.scrollY >0);
});



// cart
const cartBtn = document.getElementById("cartBtn");

cartBtn.onclick = function() {
    // Code to open cart modal or redirect to cart page
    window.location.href = "cart.html"; // Example redirection
}

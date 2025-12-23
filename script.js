// Select elements
const button = document.getElementById("eventBtn");
const message = document.getElementById("message");

// Button click event
button.addEventListener("click", () => {
    message.textContent = "🎉 Event listings will be available soon. Stay tuned!";
    message.classList.remove("hidden");
});

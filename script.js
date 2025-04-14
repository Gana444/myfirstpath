function sayHello() {
    document.getElementById("message").textContent = "You clicked the cool button, ra! 🔥";
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thanks for contacting Ganesh! 🚀");
  }
  
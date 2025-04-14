const scriptURL = https://script.google.com/macros/s/AKfycbzjNPnMCR_zVRlZUiJ1nw37pOJXNXgYyeqRAeNGiMKlvT4AW-oQJMataMRINE_PqvE1uQ/exec;

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      alert("Message sent successfully ra! 📨");
      this.reset();
    })
    .catch(error => {
      alert("Error ra! Something went wrong 😢");
      console.error("Error!", error.message);
    });
});

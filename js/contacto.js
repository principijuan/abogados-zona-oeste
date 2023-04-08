const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const data = {
    name,
    email,
    message,
  };
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://formspree.io/f/xvovvrql", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
  alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");
  form.reset();
});

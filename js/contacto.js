const btn = document.getElementById("formButton");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";
  btn.class = "";

  const serviceID = "default_service";
  const templateID = "template_1igf6ty";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar consulta";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Consulta enviada!",
        text: "Se enviará un correo de confirmación al email que ingresaste",
        showConfirmButton: true,
        timerProgressBar: true,
        timer: 4000,
      });
      this.reset();
    },
    (err) => {
      btn.value = "Enviar consulta";
      alert(JSON.stringify(err));
    }
  );
});

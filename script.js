// JavaScript para la validación del formulario de contacto
document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita el envío del formulario
  
      // Obtén los valores de los campos
      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var messageInput = document.getElementById("message");
  
      // Validar si los campos están vacíos
      if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
        alert("Por favor, completa todos los campos.");
      } else {
        // Aquí puedes agregar el código para enviar el formulario o realizar otras acciones
        alert("¡Formulario enviado con éxito!");
        contactForm.reset(); // Reinicia el formulario
      }
    });
  });
  
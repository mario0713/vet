document.getElementById('serviceForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener los datos del formulario
  const ownerName = document.getElementById('ownerName').value.trim();
  const dogName = document.getElementById('dogName').value.trim();
  const service = document.getElementById('service').value;
  const phone = document.getElementById('phone').value.trim();

  if (!ownerName || !dogName || !service || !phone) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Crear el mensaje que se enviará por WhatsApp
  const message = `Hola, soy ${ownerName}. Quiero solicitar el servicio de ${service} para mi perrito ${dogName}. Mi número de contacto es ${phone}.`;

  // Crear el enlace de WhatsApp con el mensaje preformateado
  const whatsappLink = `https://wa.me/68760685?text=${encodeURIComponent(message)}`;

  // Redirigir al usuario a WhatsApp con el mensaje
  window.location.href = whatsappLink;

  // Mostrar un mensaje de éxito en la página
  const successMessage = document.getElementById('successMessage');
  successMessage.textContent = '¡Tu solicitud ha sido enviada correctamente! Pronto nos pondremos en contacto contigo.';
});

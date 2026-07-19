// ===== MENÚ HAMBURGUESA =====
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // ===== FORMULARIO PERSONALIZADO → WHATSAPP =====
  const form = document.getElementById('formPersonalizado');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim() || 'Cliente';
      const tipo = document.getElementById('tipo').value;
      const descripcion = document.getElementById('descripcion').value.trim();
      const extra = document.getElementById('extra').value.trim();
      const imagenInput = document.getElementById('imagen');
      let imagenInfo = 'Sin imagen';

      if (imagenInput.files && imagenInput.files.length > 0) {
        const file = imagenInput.files[0];
        imagenInfo = 'Adjunta: ' + file.name + ' (' + (file.size / 1024).toFixed(0) + ' KB)';
      }

      if (!descripcion) {
        alert('⚠️ Por favor, escribe una descripción de lo que quieres.');
        return;
      }

      const mensaje =
        'Nuevo pedido personalizado\n\n' +
        '👤 Nombre: ' + nombre + '\n' +
        '📂 Categoría: ' + tipo + '\n' +
        '✏️ Descripción: ' + descripcion + '\n' +
        '📝 Detalles extra: ' + (extra || 'No especificados') + '\n' +
        '🖼️ ' + imagenInfo + '\n\n' +
        'Hola, me encantaría este llavero personalizado. ¿Podemos coordinarlo?';

      const url = 'https://wa.me/573245453480?text=' + encodeURIComponent(mensaje);
      window.open(url, '_blank');
    });
  }
});
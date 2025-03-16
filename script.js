document.addEventListener('DOMContentLoaded', function() {

    if (typeof Swapy === 'undefined') {
      console.error('Swapy no se ha cargado correctamente');
      return;
    }
    const container = document.querySelector(".container");
  
    
    const swapy = Swapy.createSwapy(container, {
      animation: 'spring',
      swapMode: 'hover'

    });
  });
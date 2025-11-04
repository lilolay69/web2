document.addEventListener('DOMContentLoaded', function() {
    
    // Selecciona los elementos por sus clases CSS
    const burgerButton = document.querySelector('.burger'); 
    const menuList = document.querySelector('.menu');       
    
    if (burgerButton && menuList) {
        
        function toggleMenu() {
            // Alterna la clase 'active' que el CSS usa para mostrar/ocultar el menú
            menuList.classList.toggle('active'); 
            
            // Opcional: Alterna una clase para cambiar el icono (ej: convertirlo en una X)
            burgerButton.classList.toggle('toggled'); 
        }

        // Evento principal: Clic para desplegar/cerrar
        burgerButton.addEventListener('click', toggleMenu);

        // Mejora UX: Cierra el menú al hacer clic en cualquiera de los enlaces
        const navLinks = menuList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Solo si el menú está abierto (tiene la clase 'active'), lo cerramos
                if (menuList.classList.contains('active')) {
                    toggleMenu(); 
                }
            });
        });
    }
    
    // AÑADE AQUÍ EL RESTO DE TU LÓGICA JAVASCRIPT (modal, tema, etc.)
});
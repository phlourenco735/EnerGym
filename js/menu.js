const menuToggle = document.getElementById('menu-toggle');
const menuLateral = document.getElementById('menu-lateral');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', function() {
    menuLateral.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    menuLateral.classList.remove('active');
});


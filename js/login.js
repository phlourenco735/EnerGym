function validateLogin(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email !== email.toLowerCase()) {
        alert("O e-mail deve ser todo em minúsculas.");
    } else if (email.includes(" ")) {
        alert("O e-mail não pode conter espaços.");
    } else if (!/^[a-z0-9._-]+@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|gmail\.com\.br|yahoo\.com\.br|hotmail\.com\.br|outlook\.com\.br)$/.test(email)) {
        alert("E-mail inválido. O e-mail deve ser de um domínio válido (como gmail.com, yahoo.com, etc.).");
    } else if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]/.test(password)) {
        alert("A senha deve conter letras maiúsculas, minúsculas, números e um símbolo.");
    } else {
        window.location.href = 'usuario.html'; 
    }
}

function validateRegister(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cep = document.getElementById('cep').value;
    var cpf = document.getElementById('cpf').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;


    if (name.trim() === "") {
        alert("O nome completo é obrigatório.");
    }

    else if (email !== email.toLowerCase()) {
        alert("O e-mail deve ser todo em minúsculas.");
    }
    else if (email.includes(" ")) {
        alert("O e-mail não pode conter espaços.");
    }
    else if (!/^[a-z0-9._-]+@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|gmail\.com\.br|yahoo\.com\.br|hotmail\.com\.br|outlook\.com\.br)$/.test(email)) {
        alert("E-mail inválido. O e-mail deve ser de um domínio válido (como gmail.com, yahoo.com, etc.).");
    }
  
    else if (!/^\d{5}-\d{3}$/.test(cep)) {
        alert("O CEP deve ser no formato 00000-000.");
    }
  
    else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
        alert("O CPF deve ser no formato 000.000.000-00.");
    }
 
    else if (!/^([0-9]{1,2}(\.[0-9]{1,2})?|3(\.00?)?)$/.test(altura)) {
        alert("A altura deve ser um número válido entre 0 e 3 metros, incluindo decimais.");
    }

    else if (peso <= 0 || peso > 500) {
        alert("O peso deve ser um número válido entre 0 e 500 kg.");
    }

    else if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
    }
    else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]/.test(password)) {
        alert("A senha deve conter letras maiúsculas, minúsculas, números e um símbolo.");
    }
  
    else if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
    }
    else {
        alert("Cadastro bem-sucedido!");
        window.location.href = 'usuario.html'; 
    }
}

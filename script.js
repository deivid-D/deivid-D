// Função para alternar entre os formulários de login e cadastro
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

// Função de login
function login(event) {
    event.preventDefault(); // Impede o envio real do formulário
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Exemplo de validação simples
    if (email === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    
    // Aqui você pode adicionar lógica para validar o login (ex: através de API)
    alert('Login realizado com sucesso!');
    
    // Redireciona para a página pós-login (ex: dashboard.html)
    window.location.href = 'dashboard.html'; // Página de conteúdo após o login
    return false; // Evita o envio do formulário real
}

// Função de cadastro
function register(event) {
    event.preventDefault(); // Impede o envio real do formulário
    
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    // Valida se os campos foram preenchidos
    if (email === '' || password === '' || confirmPassword === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    
    // Verifica se as senhas são iguais
    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return false;
    }
    
    // Aqui você pode adicionar lógica para cadastrar o usuário (ex: através de API)
    alert('Cadastro realizado com sucesso!');
    
    // Alterna para o formulário de login após cadastro
    toggleForms();
    
    // Redireciona para a página pós-login (ex: dashboard.html)
    window.location.href = 'dashboard.html'; // Página de conteúdo após o cadastro
    
    return false; // Evita o envio do formulário real
}

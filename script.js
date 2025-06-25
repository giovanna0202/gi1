// Manipulação do DOM
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');
const elementList = document.getElementById('elementList');

addElementButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'Novo Elemento';
    elementList.appendChild(newItem);
});

removeElementButton.addEventListener('click', () => {
    if (elementList.children.length > 0) {
        elementList.removeChild(elementList.lastChild);
    }
});

// Validação de formulário
const submitButton = document.getElementById('submitButton');
const message = document.getElementById('message');
const loading = document.getElementById('loading');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

submitButton.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    // Validação de campos
    if (!name || !email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Simulação de envio de formulário
    loading.classList.remove('hidden');
    setTimeout(() => {
        loading.classList.add('hidden');
        message.classList.remove('hidden');
        clearForm();
    }, 2000);
});

function clearForm() {
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}

// Função de validação de e-mail
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

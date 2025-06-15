document.addEventListener('DOMContentLoaded', () => {
    // Toggle senha
    document.querySelector('.toggle-password').addEventListener('click', function() {
        const passwordField = document.getElementById('password');
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    const userButtons = document.querySelectorAll('.user-btn');
    const titleElement = document.querySelector('.image-content h2');
    const paragraphElement = document.querySelector('.image-content p');

    userButtons.forEach(button => {
        button.addEventListener('click', function() {
            userButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            if (this.textContent.trim() === 'Fornecedor') {
                titleElement.textContent = 'Descubra seu Varejista!';
                paragraphElement.textContent = 'Conecte-se ao ecossistema de fornecimento mais avançado do mercado. Encontre varejistas que mais se encaixam ao seu perfil.';
            } else if (this.textContent.trim() === 'Varejista') {
                titleElement.textContent = 'Descubra seu Fornecedor!';
                paragraphElement.textContent = 'Conecte-se ao ecossistema de varejo mais avançado do mercado. Procure fornecedores que mais se encaixam ao seu negócio.';
            }
        });
    });


    // Máscara CNPJ
    document.getElementById('cnpj').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 14) {
            value = value.substring(0, 14);
        }

        if (value.length > 12) {
            value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, '$1.$2.$3/$4-$5');
        } else if (value.length > 8) {
            value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4}).*/, '$1.$2.$3/$4');
        } else if (value.length > 5) {
            value = value.replace(/^(\d{2})(\d{3})(\d{3}).*/, '$1.$2.$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{3}).*/, '$1.$2');
        }

        e.target.value = value;
    });

    // Máscara Data de Nascimento
    document.getElementById('birthdate').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 8) {
            value = value.substring(0, 8);
        }

        if (value.length > 4) {
            value = value.replace(/^(\d{2})(\d{2})(\d{4}).*/, '$1/$2/$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{2}).*/, '$1/$2');
        }

        e.target.value = value;
    });
});

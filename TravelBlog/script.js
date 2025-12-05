document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carrossel img");
    let currentIndex = 0;

    function showNextImage() {
        // Remove a classe "active" da imagem atual
        images[currentIndex].classList.remove("active");

        // Incrementa o índice para a próxima imagem
        currentIndex = (currentIndex + 1) % images.length;

        // Adiciona a classe "active" à próxima imagem
        images[currentIndex].classList.add("active");
    }

    // Define o intervalo para alternar as imagens a cada 3 segundos
    setInterval(showNextImage, 3000);

    // Inicializa a primeira imagem como ativa
    images[currentIndex].classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carrossel-paises img");
    let currentIndex = 0;

    function showNextImage() {
        // Remove a classe "active" da imagem atual
        images[currentIndex].classList.remove("active");

        // Incrementa o índice para a próxima imagem
        currentIndex = (currentIndex + 1) % images.length;

        // Adiciona a classe "active" à próxima imagem
        images[currentIndex].classList.add("active");
    }

    // Define o intervalo para alternar as imagens a cada 3 segundos
    setInterval(showNextImage, 3000);

    // Inicializa a primeira imagem como ativa
    images[currentIndex].classList.add("active");
});

//*Script *//

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const countryCards = document.querySelectorAll('.country-card');
    const noResults = document.getElementById('noResults');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        let hasResults = false;
        
        countryCards.forEach(card => {
            const searchData = card.getAttribute('data-search').toLowerCase();
            if (searchData.includes(searchTerm)) {
                card.style.display = 'block';
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        noResults.style.display = hasResults ? 'none' : 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            const ratingContainer = this.closest('.rating');
            const ratingValue = ratingContainer.querySelector('.rating-value');
            const starsInGroup = ratingContainer.querySelectorAll('.star');
            
            // Atualiza o atributo data-rating
            ratingContainer.setAttribute('data-rating', value);
            
            // Atualiza o display das estrelas
            starsInGroup.forEach((s, index) => {
                if (index < value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            // Atualiza o texto de avaliação
            ratingValue.textContent = `${value}/5`;
        });
        
        // Efeito hover
        star.addEventListener('mouseover', function() {
            const value = parseInt(this.getAttribute('data-value'));
            const ratingContainer = this.closest('.rating');
            const starsInGroup = ratingContainer.querySelectorAll('.star');
            
            starsInGroup.forEach((s, index) => {
                if (index < value) {
                    s.style.color = '#ffc107';
                }
            });
        });
        
        star.addEventListener('mouseout', function() {
            const ratingContainer = this.closest('.rating');
            const currentRating = parseInt(ratingContainer.getAttribute('data-rating'));
            const starsInGroup = ratingContainer.querySelectorAll('.star');
            
            starsInGroup.forEach((s, index) => {
                if (index >= currentRating) {
                    s.style.color = '#ddd';
                }
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const formVendas = document.querySelector('.vendas-form');
    
    formVendas.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário
        
        // Validação dos campos
        const emailValido = validarEmail();
        const nomeValido = validarNome();
        const mensagemValida = validarMensagem();
        const telefoneValido = validarTelefone();
        
        // Se todos os campos forem válidos
        if (emailValido && nomeValido && mensagemValida && telefoneValido) {
            // Mostrar confirmação
            if (confirm('Deseja realmente enviar o formulário?')) {
                // Simular envio (substitua por AJAX na implementação real)
                alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
                formVendas.reset(); // Limpa o formulário
            }
        }
    });
    
    // Funções de validação individuais
    function validarEmail() {
        const email = document.getElementById('email');
        const valor = email.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!valor) {
            alert('Por favor, insira seu e-mail.');
            email.focus();
            return false;
        }
        
        if (!regex.test(valor)) {
            alert('Por favor, insira um e-mail válido (exemplo@dominio.com).');
            email.focus();
            return false;
        }
        
        return true;
    }
    
    function validarNome() {
        const nome = document.getElementById('nome');
        const valor = nome.value.trim();
        
        if (!valor) {
            alert('Por favor, insira seu nome.');
            nome.focus();
            return false;
        }
        
        if (valor.length < 3) {
            alert('O nome deve ter pelo menos 3 caracteres.');
            nome.focus();
            return false;
        }
        
        return true;
    }
    
    function validarMensagem() {
        const mensagem = document.getElementById('mensagem');
        const valor = mensagem.value.trim();
        
        if (!valor) {
            alert('Por favor, insira sua mensagem.');
            mensagem.focus();
            return false;
        }
        
        if (valor.length < 10) {
            alert('A mensagem deve ter pelo menos 10 caracteres.');
            mensagem.focus();
            return false;
        }
        
        return true;
    }
    
    function validarTelefone() {
        const telefone = document.getElementById('telefone');
        const valor = telefone.value.trim();
        // Regex que aceita (00)00000-0000 ou 00000000000
        const regex = /^(\(?\d{2}\)?[\s-]?)?\d{5}[\s-]?\d{4}$/;
        
        if (!valor) {
            alert('Por favor, insira seu telefone.');
            telefone.focus();
            return false;
        }
        
        if (!regex.test(valor)) {
            alert('Por favor, insira um telefone válido (ex: (00)00000-0000 ou 00000000000).');
            telefone.focus();
            return false;
        }
        
        return true;
    }
    
    // Adiciona máscara ao campo de telefone
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function(e) {
        let valor = e.target.value.replace(/\D/g, '');
        
        if (valor.length > 11) {
            valor = valor.substring(0, 11);
        }
        
        // Formatação: (00)00000-0000
        if (valor.length > 0) {
            valor = valor.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})$/, function(match, g1, g2, g3) {
                let resultado = '';
                if (g1) resultado += `(${g1}`;
                if (g2) resultado += `)${g2}`;
                if (g3) resultado += `-${g3}`;
                return resultado;
            });
        }
        
        e.target.value = valor;
    });
});
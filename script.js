// Função para navegação suave
document.querySelectorAll('nav a').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
         top: targetElement.offsetTop - 50, // Ajuste a posição para dar uma margem no topo
         behavior: 'smooth'
      });
   });
});

// Função para validação do formulário de contato
document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault(); // Impede o envio do formulário até validarmos

   const nome = document.getElementById('nome').value;
   const email = document.getElementById('email').value;
   const mensagem = document.getElementById('mensagem').value;

   // Validação simples
   if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos!');
      return;
   }

   // Validação do e-mail
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
   if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido!');
      return;
   }

   // Simulação de envio
   alert('Mensagem enviada com sucesso!');
   
   // Limpar campos do formulário após o envio
   document.getElementById('nome').value = '';
   document.getElementById('email').value = '';
   document.getElementById('mensagem').value = '';
   
   // Animação do botão de envio
   const botao = document.getElementById('enviar');
   botao.innerHTML = 'Enviado!';
   botao.style.backgroundColor = '#28a745'; // Cor verde de sucesso
   botao.disabled = true;
   
   // Voltar a exibir o texto normal após 3 segundos
   setTimeout(() => {
      botao.innerHTML = 'Enviar';
      botao.style.backgroundColor = '#3359ec'; // Cor azul inicial
      botao.disabled = false;
   }, 3000);
});

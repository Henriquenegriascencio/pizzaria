// Troca de aba ativa na navegação
(function(){
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(a=>{
      if(a.getAttribute('href') === path){ a.classList.add('active'); }
    });
  })();
  
  // Simulação de envio (pedidos e eventos)
  function fakeSubmit(formId, message){
    const form = document.getElementById(formId);
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true; btn.textContent = 'Enviando...';
      setTimeout(()=>{
        alert(message);
        btn.disabled = false; btn.textContent = 'Enviar';
        form.reset();
      }, 900);
    });
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    if(document.getElementById('pedido-form')) fakeSubmit('pedido-form','Pedido enviado! Entraremos em contato pelo WhatsApp.');
    if(document.getElementById('evento-form')) fakeSubmit('evento-form','Solicitação enviada! Responderemos com o orçamento.');
  });
  
  // Filtro simples de rodízio por dia
  function filtrarRodizio(){
    const dia = document.getElementById('dia').value;
    document.querySelectorAll('[data-dia]').forEach(el=>{
      el.style.display = (dia==='todos' || el.dataset.dia===dia) ? '' : 'none';
    });
  }
  
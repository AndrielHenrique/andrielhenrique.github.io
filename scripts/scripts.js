function redirecionar(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        var pesquisa = document.getElementById('pesquisa').value.trim();

        if (pesquisa !== '') {
            var url = 'paginas/' + pesquisa.toLowerCase() + '.html'; // Constrói a URL da pasta de destino
            window.location.href = url;
        }
    }
/*codigo para as paginas que nao estao na pasta raiz */
function redirecionarp(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        var pesquisa = document.getElementById('pesquisa').value.trim();

        if (pesquisa !== '') {
            var url = '../paginas/' + pesquisa.toLowerCase() + '.html'; // Constrói a URL da pasta de destino
            window.location.href = url;
        }
}
//script para o audio
function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  //DOM CARRINHO
  window.addEventListener("DOMContentLoaded", function() {
    var carrinhos = document.querySelectorAll(".carrinho");
    carrinhos.forEach(function(carrinho) {
      carrinho.addEventListener("click", function(event) {
        alert("O produto foi adicionado ao carrinho!");
      });
    });
  });
//DOM PROMOÇAO RELAMPAGO
  window.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var elementoOculto = document.getElementById("elementoOculto");
  
    toggleButton.addEventListener("click", function() {
      if (elementoOculto.style.display === "none") {
        elementoOculto.style.display = "block";
      } else {
        elementoOculto.style.display = "none";
      }
    });
  });
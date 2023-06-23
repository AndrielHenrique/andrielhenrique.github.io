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


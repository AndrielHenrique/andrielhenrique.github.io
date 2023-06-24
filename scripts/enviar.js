function CadastroCliente() {
    var cliente = {
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
        imagem: ""
    };

    cliente.nome = document.getElementById("idtexto").value;
    cliente.email = document.getElementById("email").value;
    cliente.telefone = document.getElementById("telefone").value;
    cliente.mensagem = document.getElementById("idtextarea").value;
    cliente.imagem = document.getElementById("idfile").files[0];


    document.getElementById("nomec").textContent = cliente.nome;
    document.getElementById("emailc").textContent = cliente.email;
    document.getElementById("telefonec").textContent = cliente.telefone;
    document.getElementById("mensagemc").textContent = cliente.mensagem;
   

/* Verifica se a imagem do cliente existe e a exibe no elemento de imagem
 com o ID "imagemc". Caso não exista, o elemento de imagem fica vazio.*/
    if (cliente.imagem) {
        var reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById("imagemc").src = event.target.result;
        };
        reader.readAsDataURL(cliente.imagem);
    } else {
        document.getElementById("imagemc").src = "";
    }
}

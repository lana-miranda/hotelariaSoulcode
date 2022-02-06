// D na variavel é pra lembrar que é dado

function formulario() {

    var nomeD = document.getElementById("nome").value;
    var cpfD = document.getElementById("cpf").value;
    var emailD = document.getElementById("email").value;
    var foneD = document.getElementById("fone").value;
    if (
        nomeD.length != 0 &&
        cpfD.length != 0 &&
        emailD.length != 0 &&
        foneD.length != 0
    ) 
    {
        alert(`${nomeD}\nObrigado pelo seu cadastro.\nUma mensagem chegara ao seu email:\n${emailD}.`);
    } else {
        alert('Algum campo nao foi preenchido');
    }



}
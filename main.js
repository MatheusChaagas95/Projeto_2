const form = document.getElementById('form-contatos');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaTabela();
    atualizaTabela();
    criaLista();
});

function adicionaTabela() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (nome.includes(inputNomeContato.value)) {
        alert(`O nome: ${inputNomeContato.value} já foi inserido`);
    } else {
        nome.push(inputNomeContato.value);
        telefone.push(inputTelefoneContato.value);
    
        let linha = '<tr>';
        linha +=`<td>${inputNomeContato.value}</td>`;
        linha +=`<td>${inputTelefoneContato.value}</td>`;
        linha +='</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function criaLista() {
    let inserirLinha = 0;

    for (let i = 0; i < telefone.length; i++) {
        inserirLinha += telefone[i];
    }


    return inserirLinha;
}

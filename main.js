class Contatos {
    constructor(nome, email, telefone, comentario){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.comentario = comentario;
    }
}

class GerenciadorContatos {
    constructor(){

    this.contatos = []

    }

    adicionarContato(contato) {
        this.contatos.push(contato);
    }
    exibirContatos() {
        const listaContatos = document.getElementById('contato-lista');

        listaContatos.innerHTML='';

        for(const contato of this.contatos){
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - ${contato.comentario}`;
            listaContatos.appendChild(li)
        }
    }
}

const gerenciadorContatos = new GerenciadorContatos();

const contatoForm = document.getElementById('contato-form');
const comentarioF = document.getElementById('comentario');
const nomeF = document.getElementById('nome');
const emailF = document.getElementById('email');
const telefoneF = document.getElementById('telefone');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const nome = nomeF.value
    const email = emailF.value
    const telefone  = telefoneF.value
    const comentario = comentarioF.value

    const contato = new Contatos(nome, email, telefone, comentario);

    gerenciadorContatos.adicionarContato(contato);

    nomeF.value = ''
    emailF.value = ''
    telefoneF.value = ''
    comentarioF.value = ''

});

mostrarContatos.addEventListener('click', () =>{
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';
})

ocultarContatos.addEventListener('click', ()=>{
    listaContatos.style.display = 'none'
})
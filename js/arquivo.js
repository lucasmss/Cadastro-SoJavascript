function validarTelas(){
    document.getElementById('div-login').style.display = 'none';
    document.getElementById('div-cadastro').style.display = 'block';

}

function validarLogin(){

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    
    if(usuario == 'admin' && senha == 'admin'){
    
        document.getElementById('div-login').style.display = 'none';
        document.getElementById('div-cadastro').style.display = 'block';
       
        }else if (usuario == "" && senha == "") {
            
            alert("Campos em branco");

        } else {
        
        alert("usuario ou senha incorreta");
        
        }  

}



function validarDados(){

    var nome = document.getElementById('nome').value;
    var quantidade = document.getElementById('quantidade').value;
    var validade = document.getElementById('validade').value;
    var tipoProduto = document.getElementById('tipoProduto').value;
    var valor = document.getElementById('valor').value;
    var emEstoque = document.getElementsByName('emEstoque').value;
    var descricao = document.getElementById('textArea').value;


    if(nome != "" ){

        console.log(contador);
        
        if(contador <= 4){

        adicionarDados();

        }
     
    } else{
        
        alert('Preencha os campos obrigatórios');
  
    }

}
var contador = 0;

function adicionarDados(){

    contador++;
    var tabela = document.getElementById('tabela');
    var linha = tabela.insertRow(tabela.length);
    
  
    var Selecao = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellQuantidade = linha.insertCell(2);
    var cellValidade = linha.insertCell(3);
    var cellTipoProduto = linha.insertCell(4);
    var cellValor = linha.insertCell(5);
    var cellEmEstoque = linha.insertCell(6);
    var celDescricao = linha.insertCell(7);
    var btnEdiar = linha.insertCell(8);
    var btnExcluir = linha.insertCell(8);



    var nome = document.getElementById('nome').value;
    var quantidade = document.getElementById('quantidade').value;
    var validade = document.getElementById('validade').value;
    var tipoProduto = document.getElementById('tipoProduto').value;
    var valor = document.getElementById('valor').value;
    var emEstoque = document.getElementById('simRadio').value;
    var emEstoqueNao = document.getElementById('naoRadio').value;
    var descricao = document.getElementById('textArea').value;

  
    Selecao.innerHTML = "<input type='checkbox'/>"
    cellNome.innerHTML = nome;
    cellQuantidade.innerHTML = quantidade;
    cellValidade.innerHTML = validade;
    cellTipoProduto.innerHTML = tipoProduto;
    cellValor.innerHTML = valor;
    cellEmEstoque.innerHTML = emEstoque;
    celDescricao.innerHTML = descricao;
    btnEdiar.innerHTML = "<button onclick= 'editarDados(this)'>Editar</button>";
    btnExcluir.innerHTML = "<button onclick= 'removeDados(this)'>Excluir</button>";
  
}

function editarDados(linha){

    var linhaEditar = linha.parentNode.parentNode;
    document.getElementById('nome').value = linhaEditar.insertCell(1).innerHTML;

}


function removeDados(linha){

    var linhaExcluir = linha.parentNode.parentNode.rowIndex;

    document.getElementById('tabela').deleteRow(linhaExcluir);
    
}

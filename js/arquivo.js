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


    if(nome != "" && quantidade != "" && validade != "" && tipoProduto != "" && valor !=""){

        alert("funciona!")

    } else{
        
        alert('Preencha os campos obrigatórios');
  
    }

}

function adicionarDados(){

    
    var tabela = document.getElementById('tabela');
    var qtnLinhas = tabela.rows.length;
    var linha = tabela.insertRow(qtnLinhas);
  
    
    var cellNome = linha.insertCell(0);
    var cellQuantidade = linha.insertCell(1);
    var cellValidade = linha.insertCell(2);
    var cellTipoProduto = linha.insertCell(3);
    var cellValor = linha.insertCell(4);

    var nome = document.getElementById('nome').value;
    var quantidade = document.getElementById('quantidade').value;
    var validade = document.getElementById('validade').value;
    var tipoProduto = document.getElementById('tipoProduto').value;
    var valor = document.getElementById('valor').value;


    cellNome.innerHTML = nome;
    cellQuantidade.innerHTML = quantidade;
    cellValidade.innerHTML = validade;
    cellTipoProduto.innerHTML = tipoProduto;
    cellValor.innerHTML = valor;

}

function removeDados(id){

    teste = document.getElementById(id);
    teste.parentNode.parentNode.removeChild(teste.parentNode);
}

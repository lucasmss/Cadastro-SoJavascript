function validarTelas(){
    document.getElementById('div-login').style.display = 'block';
    document.getElementById('div-cadastro').style.display = 'none';

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

        alert('mec');

    } else{
        
        alert('Preencha os campos obrigatorios');
  
    }

}
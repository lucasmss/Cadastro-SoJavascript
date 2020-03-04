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
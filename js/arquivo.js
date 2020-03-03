function validarLogin(){

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;


    if(usuario == 'admin' && senha == 'admin'){
        
       window.open("cadastroProduto.html");

        }else {
        
        alert("usuario ou senha incorreta");
        
        }  

}
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

var contador = 0;

function validarDados(){

    var nome = document.getElementById('nome').value;
    var quantidade = document.getElementById('quantidade').value;
    var validade = document.getElementById('validade').value;
    var tipoProduto = document.getElementById('tipoProduto').value;
    var valor = document.getElementById('valor').value;
    var emEstoque = document.getElementsByName('emEstoque').value;
    if (document.getElementById('simRadio').checked) {
        emEstoque  = document.getElementById('simRadio').value;
      }
      else{
        emEstoque = document.getElementById('naoRadio').value;
      }
    var descricao = document.getElementById('textArea').value;


    if(nome != "" ){
        
        if(contador <= 4){

        adicionarDados();

        }
     
    } else{
        
        alert('Preencha os campos obrigatórios');
  
    }

}



function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var nome=document.getElementById('nome'+no);
 var quantidade=document.getElementById('quantidade'+no);
 var validade=document.getElementById('validade'+no);
 //var tipoProduto = document.getSelection('tipoProduto'+no);
 var valor = document.getElementById('valor'+no);
 var emEstoque = document.getElementsByName('emEstoque');
 if (document.getElementById('simRadio').checked) {
    emEstoque = document.getElementById('simRadio').value;
  }
  else{
    emEstoque = document.getElementById('naoRadio').value;
  }
 //var descricao = document.getElementById('textArea'+no);
	
 var nome_data=nome.innerHTML;
 var quantidade_data=quantidade.innerHTML;
 var validade_data=validade.innerHTML;
 //var tipoPro_data=tipoProduto.innerHTML;
 var valor_data=valor.innerHTML;
 var emEstoque_data=emEstoque.innerHTML;
 //var descricao_data=descricao.innerHTML;

	
 nome.innerHTML="<input type='text' id='nome_dado"+no+"' value='"+nome_data+"'>";
 quantidade.innerHTML="<input type='number' id='quantidade_dado"+no+"' value='"+quantidade_data+"'>";
 validade.innerHTML="<input type='date' id='validade_dado"+no+"' value='"+validade_data+"'>";
 //tipoProduto.innerHTML="<input type='text' id='tipoProduto_dado"+no+"' value='"+tipoPro_data+"'>";
 valor.innerHTML="<input type='number' id='valor_dado"+no+"' value='"+valor_data+"'>";
 emEstoque.innerHTML="<input type='text' id='emEstoque_dado"+no+"' value='"+emEstoque_data+"'>";
 //descricao.innerHTML="<input type='text' id='descricao_dado"+no+"' value='"+descricao_data+"'>";
 
}


function save_row(no)
{
    var name_val=document.getElementById("nome_dado"+no).value;
    var quantidade_val=document.getElementById("quantidade_dado"+no).value;
    var validade_val=document.getElementById("validade_dado"+no).value;
   // var tipoProduto_val=document.getElementById("tipoProduto_dado"+no).value;
    var valor_val=document.getElementById("valor_dado"+no).value;
   // var emEstoque_val=document.getElementById("emEstoque_dado"+no).value;
   // if (document.getElementById('simRadio').checked) {
     //   emEstoque  = document.getElementById('simRadio').value;
   //   }
    //  else{
    //    emEstoque = document.getElementById('naoRadio').value;
    //  }
  // var descricao_val=document.getElementById("descricao_dado"+no).value;
   

    document.getElementById("nome"+no).innerHTML=name_val;
    document.getElementById("quantidade"+no).innerHTML=quantidade_val;
    document.getElementById("validade"+no).innerHTML=validade_val;
   // document.getElementById("tipoProduto"+no).innerHTML=tipoProduto_val;
    document.getElementById("valor"+no).innerHTML=valor_val;
   // document.getElementById("emestoque"+no).innerHTML=emEstoque_val;
   // document.getElementById("textArea"+no).innerHTML=descricao_val;

    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}



function delete_row(no){

    document.getElementById("row"+no+"").outerHTML="";
    
}

function adicionarDados(){
    
    contador++;
    
    var nome = document.getElementById('nome').value;
    var quantidade = document.getElementById('quantidade').value;
    var validade = document.getElementById('validade').value;
    var tipoProduto = document.getElementById('tipoProduto').value;
    var valor = document.getElementById('valor').value;
    var emEstoque = document.getElementsByName('emEstoque').value;
    if (document.getElementById('simRadio').checked) {
        emEstoque  = document.getElementById('simRadio').value;
      }
      else{
        emEstoque = document.getElementById('naoRadio').value;
      }
    var descricao = document.getElementById('textArea').value;


    var table = document.getElementById('tabela');
    var table_len=(table.rows.length);
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='nome"+table_len+"'>"+nome+
    "</td><td id='quantidade"+table_len+"'>"+quantidade+
    "</td><td id='validade"+table_len+"'>"+validade+
    "</td><td id='tipoProduto"+table_len+"'>"+tipoProduto+
    "</td><td id='valor"+table_len+"'>"+valor+
    "</td><td id='emEstoque"+table_len+"'>"+emEstoque+
    "</td><td id='descricao"+table_len+"'>"+descricao+
    "</td><td><input type='button' id='edit_button"+
    table_len+"' value='Edit' class='edit' onclick='edit_row("+
    table_len+")'> <input type='button' id='save_button"+
    table_len+"' value='Save' class='save' onclick='save_row("+
    table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
    
    document.getElementById('nome').value="";
    document.getElementById('quantidade').value="";
    document.getElementById('validade').value="";
    document.getElementById('tipoProduto').value="";
    document.getElementById('valor').value="";
    document.getElementsByName('emEstoque').value="";
    document.getElementById('textArea').value="";

  
}
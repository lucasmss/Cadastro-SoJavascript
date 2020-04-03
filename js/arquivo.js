function validarTelas(){
    document.getElementById('div-login').style.display = 'none';
    document.getElementById('div-cadastro').style.display = 'block';

}

function validarLogin(){

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var check = document.getElementById('checkBox'); 
    
    if(usuario == 'Lucas' && senha == '123' || check.checked == true){

      document.getElementById('usuario-log').innerHTML=usuario;

      if (check.checked == true){ 
       
        verific_usuario = usuario;
        varific_senha = senha;

      }else{

        var usuario = document.getElementById('usuario').value="";
        var senha = document.getElementById('senha').value="";
      }
    
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
        
        }else{

          paginacao();

        }
     
    } else{
        
        alert('Preencha os campos obrigatórios');
  
    }

}


var contadorEdit = 0;

function edit_row(no)

{

 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var nome=document.getElementById('nome'+no);
 var quantidade=document.getElementById('quantidade'+no);
 var validade=document.getElementById('validade'+no);
 var tipoProduto = document.getElementById('tipoProduto'+no);
 var valor = document.getElementById('valor'+no);
 var emEstoque = document.getElementsByName('emEstoque');
 if (document.getElementById('simRadio').checked) {
    emEstoque = document.getElementById('simRadio').value;
  }
 else{
    emEstoque = document.getElementById('naoRadio').value;
  }
 var descricao = document.getElementById('textArea'+no);
	
 var nome_data=nome.innerHTML;
 var quantidade_data=quantidade.innerHTML;
 var validade_data=validade.innerHTML;
 var tipoPro_data=tipoProduto.innerHTML;
 var valor_data=valor.innerHTML;
 var emEstoque_data=emEstoque.innerHTML;
 var descricao_data=descricao.innerHTML;

	
 nome.innerHTML="<input type='text' id='nome_dado"+no+"' value='"+nome_data+"'>";
 quantidade.innerHTML="<input type='number' id='quantidade_dado"+no+"' value='"+quantidade_data+"'>";
 validade.innerHTML="<input type='date' id='validade_dado"+no+"' value='"+validade_data+"'>";
 tipoProduto.innerHTML="<input type='text' id='tipoProduto_dado"+no+"' value='"+tipoPro_data+"'>";
 valor.innerHTML="<input type='number' id='valor_dado"+no+"' value='"+valor_data+"'>";
 emEstoque.innerHTML="<input type='text' id='emEstoque_dado"+no+"' value='"+emEstoque_data+"'>";
 descricao.innerHTML="<input type='text' id='descricao_dado"+no+"' value='"+descricao_data+"'>";
 
}


function save_row(no)

{
  contadorEdit++;
  document.getElementById('edit_regis').innerHTML=contadorEdit;
  document.getElementById('linha_alte').innerHTML=no;

    var name_val=document.getElementById("nome_dado"+no).value;
    var quantidade_val=document.getElementById("quantidade_dado"+no).value;
    var validade_val=document.getElementById("validade_dado"+no).value;
    var tipoProduto_val=document.getElementById("tipoProduto_dado"+no).value;
    var valor_val=document.getElementById("valor_dado"+no).value;
    var emEstoque_val=document.getElementsByName("emEstoque_dado"+no).value;
    if (document.getElementById('simRadio').checked) {
       emEstoque  = document.getElementById('simRadio').value;
    }
      else{
        emEstoque = document.getElementById('naoRadio').value;
    }
    var descricao_val=document.getElementById("descricao_dado"+no).value;
   

    document.getElementById("nome"+no).innerHTML=name_val;
    document.getElementById("quantidade"+no).innerHTML=quantidade_val;
    document.getElementById("validade"+no).innerHTML=validade_val;
    document.getElementById("tipoProduto"+no).innerHTML=tipoProduto_val;
    document.getElementById("valor"+no).innerHTML=valor_val;
    document.getElementsByName("emestoque"+no).innerHTML=emEstoque_val;
    document.getElementById("textArea"+no).innerHTML=descricao_val;

    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}



function delete_row(no){

    contador--;
    document.getElementById('total_regis').innerHTML=contador;
    document.getElementById("row"+no+"").outerHTML="";
}

function adicionarDados(table_len){
    
    contador++;
    document.getElementById('total_regis').innerHTML=contador;
  
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

    var dadosLinhaTabela = {
      dadoNome: nome,
      dadoquantidade: quantidade,
      dadoValidade: validade,
      dadoTipoProduto: tipoProduto,
      dadoValor: valor,
      dadoDescrica: descricao
    };

    var table = document.getElementById('tabela');
    var table_len=(table.rows.length);
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td><input type='radio' name= 'selecionar' id='select_button"+
    table_len+"' value='select' class='select' onclick='select_position("+
    table_len+")'></td><td id='nome"+table_len+"'>"+nome+
    "</td><td id='quantidade"+table_len+"'>"+quantidade+
    "</td><td id='validade"+table_len+"'>"+validade+
    "</td><td id='tipoProduto"+table_len+"'>"+tipoProduto+
    "</td><td id='valor"+table_len+"'>"+valor+
    "</td><td name='emEstoque"+table_len+"'>"+emEstoque+
    "</td><td id='textArea"+table_len+"'>"+descricao+
    "</td><td><input type='button' id='edit_button"+
    table_len+"' value='Edit' class='edit' onclick='edit_row("+
    table_len+")'><input type='button' id='save_button"+
    table_len+"' value='Save' class='save' onclick='save_row("+
    table_len+")'><input type='button' value='Delete' class='delete' onclick='delete_row("+
    table_len+")'></td><td><input type='button' id='up_button"+
    table_len+"' value='up' class='up' onclick='edit_positionUp("+
    table_len+")'></td><td><input type='button' id='dow_button"+
    table_len+"' value='dow' class='dow' onclick='edit_positionDow("+
    table_len+")'></td></tr>";

    document.getElementById("edit_button"+table_len).style.display="block";
    document.getElementById("save_button"+table_len).style.display="none";

    document.getElementById('nome').value="";
    document.getElementById('quantidade').value="";
    document.getElementById('validade').value="";
    document.getElementById('tipoProduto').value="";
    document.getElementById('valor').value="";
    document.getElementsByName('emEstoque').value="";
    document.getElementById('textArea').value="";

    //paginacao(dadosLinhaTabela, table_len);
    //edit_position(table_len);
}

function paginacao(dadosLinhaTabela){

  var dadosTabela = {};   

  for(var dado = 1; dado <= 4; dado++){

  

    dadosTabela.push(dado);
  }

  dadosTabela.push(dadosLinhaTabela);
  console.log(dadosLinhaTabela, table_len);
  console.log(dadosTabela);

}


function select_position(table_len){

}
          
function edit_positionUp(table_len){

  var table = document.getElementsByTagName('table');
  var table = table[0];
  var rows = table.getElementsByTagName('tr');
  var shifted = rows[1];
  rows[1].parentNode.removeChild(rows[1]);
  table.appendChild(shifted);
  
     
}

function edit_positionDow(table_len){

  var table = document.getElementsByTagName('table');
  var table = table[0];
  var rows = table.getElementsByTagName('tr');
  var shifted = rows[1];
  rows[1].parentNode.removeChild(rows[1]);
  table.appendChild(shifted);
  rows[1].parentNode.appendChild(rows[1]);
     

}
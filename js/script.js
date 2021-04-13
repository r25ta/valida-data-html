function limparResposta(){
  var limpar = document.getElementById("txtSaida");
};

function processarCompetencia(){
  var apolice = document.getElementById("apolice").value;
  var inicioVigApolice = new Date(document.getElementById("inicioVigApolice").value.replace("-",","));
  var fimVigApolice = new Date(document.getElementById("fimVigApolice").value.replace("-",","));
  var cpt = new Date(document.getElementById("cpt").value.replace("-",","));

  var mesCpt = cpt.getMonth();
  var anoCpt = cpt.getFullYear();
      
  //ADD PRIMEIRO DIA DO MÊS
  var inicioVigCpt = new Date(anoCpt,(mesCpt),1);
  //ADD ULTIMO DIA DO MÊS
  var fimVigCpt = new Date(anoCpt,(mesCpt)+1,0)
  var resposta = processar(inicioVigApolice,fimVigApolice,inicioVigCpt,fimVigCpt, document.getElementById("cpt").value,apolice);
  imprimeNaTela(resposta);
};

function processar(inicioVigApolice,fimVigApolice,inicioVigCpt,fimVigCpt, cpt,apolice) {
  var retorno="";
  if(inicioVigApolice.getTime() <= fimVigApolice.getTime()){
    if( inicioVigCpt.getTime() >= fimVigApolice.getTime() ||  fimVigCpt.getTime() < inicioVigApolice.getTime()  ){
      return "Competência inválida " + cpt + ". Para apolice "+ apolice +" com vigência entre  " + formatarData(inicioVigApolice) + " a " + formatarData(fimVigApolice);
      
    }else{
      if(inicioVigApolice.getTime()>= inicioVigCpt.getTime()){
        inicioFatura = inicioVigApolice;
      
      }else{
        inicioFatura = inicioVigCpt;
      
      };
      if(fimVigApolice.getTime()<=fimVigCpt.getTime()){
        terminoFatura = fimVigApolice;
      
      }else{
        terminoFatura = fimVigCpt
      
      };
      return "Apolice " + apolice + " processada [vigência " + formatarData(inicioVigApolice) + " - " + formatarData(fimVigApolice) + "]. Para competência " + cpt + " [faturamento de " + formatarData(inicioFatura) + " ate " + formatarData(terminoFatura) +"]";

    };
  }else{
    return "Parametro invalido data inicio vigência apolice " + formatarData(inicioVigApolice) + " é maior que Data fim vigência apolice " + formatarData(fimVigApolice);

  };
  
  return retorno;
};

function imprimeNaTela(param){
  var elemento = document.getElementById("txtSaida");
  elemento.value=param;  
};

function formatarData(data){
  var dia = data.getDate();
  var mes = data.getMonth();
  var ano = data.getFullYear();

  if(dia.toString().length==1){
    dia= "0"+dia;    
  
  };
  
  mes = mes+1;
  if(mes.toString().length==1){
    mes= "0"+mes;

  };
  return dia +"/" + mes + "/" + ano;
  
};
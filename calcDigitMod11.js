// Função para validar o digito da agencia para o banco Bradesco (via modulo 11);
// Uma vez passado um parametro, o valor que a função retorna é o correto;
// Ex: no console -> calcDigitMod11('1768'); (passar em formato de string); (o valor correto a ser retornado nesse caso é 0);

// Marco Bonuto
// Contato: marco@cammino.com.br
// Skype: marcobonutof@hotmail.com

function calcDigitMod11(n){
  n = n.toString();
  var v1,v2,v3,v4;

  if (n.length == 1) {
    n = "000" + n;
  } else if (n.length == 2) {
    n = "00" + n;
  } else if (n.length == 3) {
    n = "0" + n;
  }

  v1 = parseInt(n[0],10)*5;
  v2 = parseInt(n[1],10)*4;
  v3 = parseInt(n[2],10)*3;
  v4 = parseInt(n[3],10)*2;

  var diffmod = 11-((v1+v2+v3+v4)%11);

  if (diffmod == 10) {
    //return "P"
    return 0;
  } else if (diffmod == 11) {
    return 0;
  } else {
    return diffmod;
  }
}
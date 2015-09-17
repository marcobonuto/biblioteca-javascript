// Função em JavaScript para validar a data de validade de cartao de crédito;
// O input deve ser criado da seguinte maneira -> '99/9999';
// Ele só aceita a partir do mês e ano atual, abaixo disso a validação barra;

// Marco Bonuto
// Contato: marco@cammino.com.br
// Skype: marcobonutof@hotmail.com

var validCreditCardDate = function(date_string) {
  re = /^(\d{1,2})\/(\d{1,4})$/;

  if(date_string != '') {
    if(regs = date_string.match(re)) {

      // o mês tem que ser entre 01 e 12
      if(regs[1] < 1 || regs[1] > 12) {
        return false;
      }
      // ano atual
      if(regs[2] < (new Date()).getFullYear().toString()) {
        return false;
      }

      // compara se nao expirou
      var enter_date   = new Date(parseInt(regs[2], 10), parseInt(regs[1],10)-1, 1);
      var compare_date = new Date();
      compare_date.setDate(1);
      if (enter_date.setHours(0,0,0,0) < compare_date.setHours(0,0,0,0)) {
        return false;
      }

    } else {
      return false;
    }
    return true;
  }
}
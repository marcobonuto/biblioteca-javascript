// Funçao em JS para validar data de aniversario;
// Regra: nascido a partir de 1900 até data de atual;

// Marco Bonuto
// Contato: marco@cammino.com.br
// Skype: marcobonutof@hotmail.com

function validBirthDate(value) {
  
  var parts = value.split('/');
  
  var day = (parseInt(parts[0],10));
  var month = (parseInt(parts[1],10));
  var year = (parseInt(parts[2],10));
  
  var valid = false;

  if ((year < 1900) || (year > new Date().getFullYear())) {
    return false;
  }
  
  if ((month < 1) || (month > 12)) {
    return false;
  }

  if ((day == 0) || (day > 31)) {
    return false;
  }

  return true;
}
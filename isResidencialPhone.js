// Função em JS para validar telefone fixo no Brasil;
// Regra: primeiro numero deve ser entre 2 até 5;

// Marco Bonuto
// Contato: marco@cammino.com.br
// Skype: marcobonutof@hotmail.com

function isResidencialPhone(value) {
	var numbers = value.toString().replace( /[^\d.]/g, '');
	var first = parseInt(numbers.substr(2,1), 10);
	return ((first >= 2) && (first <= 5));
}
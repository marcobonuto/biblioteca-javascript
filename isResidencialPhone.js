// Função em JS para validar telefone fixo no Brasil

function isResidencialPhone(value) {
	var numbers = value.toString().replace( /[^\d.]/g, '');
	var first = parseInt(numbers.substr(2,1), 10);
	return ((first >= 2) && (first <= 5));
}
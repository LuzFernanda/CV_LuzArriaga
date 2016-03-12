/*Pregunta 5
Crear la clase (con la función constructora) de teléfono, un teléfono tiene un número asignado que se le pasa a la función constructora, y carácterístcas como marca y color. 
Crear un método que se llame marcar que aumente el contador de llamadas en uno. 
Crear un arreglo de teléfonos y crear una función reciba un arreglo de teléfonos y que permita devolver otro arreglo con todos los teléfono de una marca.*/

function Telefono(numero,marca,col){
	this.numero = numero;
	this.marca = marca;
	this.col= col;
	this.marcar = function(llamadas){
		llamadas++;
	};
}
var tels = [
	new Telefono(123456,'Iphone','Dorado'),
	new Telefono(234902,'Samsung','Negro'),
	new Telefono(169201,'LG','Rojo'),
	new Telefono(192022,'Iphone','Blanco')
]
var arr = []
function TelsMarca(tels,marca){
	arr =tels.filter(function(elem){
		return elem.marca == marca;
	})
	return arr;
}
console.log(TelsMarca(tels,'Iphone'));
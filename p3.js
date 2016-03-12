//Pregunta 3 Se pide una función que recibe un arreglo como parámetro y devuelva una copia del arreglo. Probar con un ejemplo sencillo que funcione.
var copia = []
function CopiaArr(arr){
	for(i=0;i<arr.length;i++){
		copia[i]=arr[i];
	}

	return copia;
}
var arr = [1,2,3,4,5];
console.log(CopiaArr(arr));


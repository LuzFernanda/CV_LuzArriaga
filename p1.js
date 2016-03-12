//Crear una función que tome los números de un arreglo entregado como parámetro y devuelva la suma de los elementos. Si uno de los elementos no es un número deber ser ignorado.
function Suma(arr){
	suma = 0;
	for(i=0;i<arr.length;i++){
		if(typeof(arr[i]) == 'number'){
			suma +=  arr[i];
		}
	}
return suma;
}
console.log(Suma([1,2,3,4,5,6]));
console.log(Suma([2,4,6,10,20,1,'a',2]))

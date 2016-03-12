//Pregunta 2 Se ha creado el siguiente algoritmo que busca que el usuario ingrese elementos hasta que se canse, para lo cual ingresará la palabra fin, este algoritmo no está funcionando, se pide arreglarlo.
var suma = 0
do {
	var ingreso = prompt("ingresa un número");
	if(isNaN(ingreso)== false){
		suma = suma + (parseInt(ingreso));
	}
}
 while (ingreso != "fin");
 console.log(suma)


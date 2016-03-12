//Pregunta 4 El usuario ingresa n en pantalla, se debe dibujar un cuadradro hueco de largo n.
var n = prompt("Cual es el largo del cuadrado");
for(i=0;i<n;i++){
	for(j=0;j<n;j++){
		if((j==0) || (j ==n-1) || (i == 0) || (i == n-1)){
			console.log('*')
		}
		else{
			console.log(' ');
		}
	}
}

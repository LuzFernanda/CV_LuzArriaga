//Ejercicio 7
$('div').click(function(event){
	$(this).attr('style','background-color:blue');
  event.stopImmediatePropagation()
});
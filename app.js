

// Ejercicio1

function businessHours(semana, hora){
    var semana = parseInt(prompt('Día de la semana numero 123...7'));
    var hora = parseInt(prompt('Ingresa la hora de 9 a 16 hrs'));
   
    if (semana==1 &&  hora >=6 && hora <16  ) {
    alert("Hora Comercial, Feliz Lunes" );
}else if(semana==2 &&  hora >=6 && hora <16 ){
    alert("Hora Comercial Felíz Martes");
}else if(semana==3 &&  hora >=6 && hora <16 ){
    alert("Hora Comercial Felíz Miercoles");
}else if(semana==4 &&  hora >=6 && hora <16 ){
    alert("Hora Comercial Felíz Jueves");
}else if(semana==5 &&  hora >=6 && hora <16 ){
    alert("Hora Comercial Felíz Viernes");
}else if(semana==6 &&  hora >=6 && hora <16 ){
    alert("Hora Comercial Felíz Sabado");
}else if(semana==7 &&  hora >=6 && hora <16 ){
    alert("Hora Comercial Felíz Domingo");

}else (semana>8 &&  hora >16);{
    alert("False no es hora comercial");

}
}
businessHours();

//Ejercicio2
const fechaComoCadena = (prompt('Ingresa año-mes-dia  2022-01-10 23:37:22'));

const dias = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];
const numeroDia = new Date(fechaComoCadena).getDay();
const nombreDia = dias[numeroDia];
console.log("Nombre de día de la semana: ", nombreDia);




//Ejercicio3

const fechaComoCadena = (prompt('Ingresa año-mes-dia  2022-01-10 23:37:22'));
const hora = parseInt(prompt('Ingresa la hora de 9 a 16 hrs'));
const dias = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];
const numeroDia = new Date(fechaComoCadena).getDay();
const nombreDia = dias[numeroDia];



console.log("Nombre de día de la semana: ", nombreDia , hora >=6 && hora <16);

if (nombreDia=='lunes','martes','miércoles','jueves','viernes') {
    console.log("Día comercial;" + hora )

}else if(nombreDia=='domingo','sábado'){
    console.log("Cerrado en fin de semana");

}else{
    console.log("Este no es un número de semana");
}






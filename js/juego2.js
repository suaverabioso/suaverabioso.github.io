

var libros = parseInt(prompt('Ingrese cuántos libros hay en una biblioteca:',''));
var mascien = 0;
var menoscien = 0;
var promediomas = 0;
var promediomenos = 0;


while (isNaN(libros))
{
  alert("Ingrese numeros, no letras. Especificamente un numero positivo");
  libros = parseInt(prompt('Ingrese cuántos libros hay en una biblioteca:',''));
}
if (libros<0) {
  alert('Ingrese un número positivo');
  libros = parseInt(prompt('Ingrese cuántos libros hay en una biblioteca:',''));
}


for (i = 1; i <= libros; i++) {
  paginas = parseInt(prompt('Ingrese la cantidad de páginas del libro: '+ i ,''));

  while (isNaN(paginas)) {
    alert("Ingrese numeros, no letras. Especificamente un numero positivo");
    paginas = parseInt(prompt('Ingrese la cantidad de paginas del libro:' + i ,''));
  }

  if ( paginas < 4 || paginas > 4000 ) {
    alert('La cantidad de paginas tiene que ser entre 4 y 4000');
    paginas = parseInt(prompt('Ingrese la cantidad de páginas del libro: '+ i ,''));
  }

  if (paginas<=100) {
    menoscien = menoscien + 1;
    promediomenos = promediomenos + paginas;

  }
  if (paginas>100) {
    mascien = mascien + 1;
    promediomas = promediomas + paginas;
  }
}

document.write("El porcentaje de libros con más de 100 páginas es: " + Math.ceil(mascien / libros * 100)  + "%" + "<br>");
document.write("El porcentaje de libros con 100 o menos páginas es: " + Math.ceil(menoscien / libros * 100)  + "%" + "<br>");

if ( mascien == 0 ) {
  document.write("El promedio de la cantidad de páginas de los libros que tienen menos o igual a 100 páginas es: No se pudo realizar el promedio" + "<br>");
} else {
  document.write("El promedio de la cantidad de páginas de los libros que tienen más de 100 páginas es: " + Math.ceil(promediomas / mascien) + "<br>");
}

if (menoscien == 0 ) {
  document.write("El promedio de la cantidad de páginas de los libros que tienen menos o igual a 100 páginas es: No se pudo realizar el promedio" + "<br>");
} else {
document.write("El promedio de la cantidad de páginas de los libros que tienen menos o igual a 100 páginas es: " + Math.ceil(promediomenos / menoscien) + "<br>");
}

/* el promedio es sacar el porcentaje
porcentaje:
-15 libros
-5 son mas de 100pags
10 tienen menos de 100pags
15 es el 100porciento de todo
5 / 15 : 0,3
0,3 x 100(que es el valor total del porcentaje)*/

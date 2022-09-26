// CURSOS
let cursoUno = "Desarrollo Web";
let cursoDos = "JavaScript";
let cursoTres = "React";
let entrada = "";

// PRECIO CURSOS
let precioCursoUno = 1000;
let precioCursoDos = 2500;
let precioCursoTres = 3750;
let precioFinalUno = 0;
let precioFinalDos = 0;
let precioFinalTres = 0;

// CANTIDAD DISPONIBLES

let stockCursoUno = 10;
let stockCursoDos = 6;
let stockCursoTres = 5;

let costoFinal = 0;
let control = 1;
let contadorControlFinal = 1;

function pagarCursos(costoFinal) {
    alert("El monto total por los cursos adquiridos es: " + costoFinal);
    alert("Gracias por adquirir nuestros cursos te esperamos pronto para seguir aprendiendo");
    console.log(costoFinal);
    return 0;
}

function elijeCurso(entrada) {
    while (control) {
        if (entrada == cursoUno.toUpperCase()) {
            let preCantidadCursoUno = parseInt(
                prompt(
                    "Ingrese la cantidad del cursos de " +
                        cursoUno +
                        " quiere adquirir"
                )
            );
            if (preCantidadCursoUno <= stockCursoUno) {
                precioFinalUno = preCantidadCursoUno * precioCursoUno;
                stockCursoUno -= preCantidadCursoUno;
            } else {
                alert("No disponemos mas de stock del curso " + cursoUno);
            }
        } else if (entrada == cursoDos.toUpperCase()) {
            let preCantidadCursoDos = parseInt(
                prompt(
                    "Ingrese la cantidad del cursos de " +
                        cursoDos +
                        " quiere adquirir"
                )
            );
            if (preCantidadCursoDos <= stockCursoDos) {
                precioFinalDos = preCantidadCursoDos * precioCursoDos;
                stockCursoDos -= preCantidadCursoDos;
            } else {
                alert("No disponemos mas de stock del curso " + cursoDos);
            }
        } else if (entrada == cursoTres.toUpperCase()) {
            let preCantidadCursoTres = parseInt(
                prompt(
                    "Ingrese la cantidad del cursos de " +
                        cursoTres +
                        " quiere adquirir"
                )
            );
            if (preCantidadCursoTres <= stockCursoTres) {
                precioFinalTres = preCantidadCursoTres * precioCursoTres;
                stockCursoTres -= preCantidadCursoTres;
            } else {
                alert("No disponemos mas de stock del curso " + cursoTres);
            }
        } else {
            alert("No tenemos ese Curso disponible en la plataforma");
            entradaCurso();
        }

        for (let i = 1; i == contadorControlFinal; i++) {
            costoFinal += precioFinalUno + precioFinalDos + precioFinalTres;
        }

        entrada = " ";

        if (entrada == " ") {
            let denuevo = prompt(
                "Quiere elejir mas cursos? \n Elija 'SI' si quiere elejir otro curso. \n Elija 'NO' si no quiere mas cursos"
            ).toUpperCase();
            if (denuevo == "SI") {
                entradaCurso();
            } else {
                alert("Te redirigimos a nuestra seccion de pago");
                control = 0;
                pagarCursos(costoFinal);
            }
        }
        contadorControlFinal += 1;
    }
}

function entradaCurso() {
    entrada = prompt(
        "Elija si quiere el curso de " +
            "\n" +
            cursoUno +
            "\n" +
            cursoDos +
            "\n" +
            cursoTres +
            "\n" +
            " o ESC para salir"
    ).toUpperCase();
    if (entrada != "ESC") {
        elijeCurso(entrada);
    } else {
      alert("Gracias por visitarnos lo espereramos pronto");
    }
}


confirm("Buen dia, bienvenido a Coder");

alert("Con cual curso quieres iniciarte");

entradaCurso();

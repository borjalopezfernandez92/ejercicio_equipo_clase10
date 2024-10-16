// Inits

let tag;
let text;
let cont;

function init() {
    // Creación título
    tag = document.createElement("h1");
    text = document.createTextNode("Ejercicio Equipo Clase 10");
    document.body.appendChild(tag);
    tag.appendChild(text);

    // Creación radio 1
    tag = document.createElement("input");
    tag.setAttribute("type", "radio");
    tag.setAttribute("name", "menu");
    tag.setAttribute("id", "radio_opcion1");
    tag.setAttribute("onclick", "createOp1();");
    document.body.appendChild(tag);
    
    tag = document.createElement("label");
    text = document.createTextNode("Opción1");
    tag.appendChild(text);
    document.body.appendChild(tag);

    // Creación radio 2
    tag = document.createElement("input");
    tag.setAttribute("type", "radio");
    tag.setAttribute("name", "menu");
    tag.setAttribute("id", "radio_opcion2");
    tag.setAttribute("onclick", "createOp2();");
    document.body.appendChild(tag);

    tag = document.createElement("label");
    text = document.createTextNode("Opción2");
    tag.appendChild(text);
    document.body.appendChild(tag);

    // Creación br
    createBr(2);

    // creación div
    tag = document.createElement("div");
    tag.setAttribute("id", "container");
    document.body.appendChild(tag);

    tag = document.createElement("div");
    tag.setAttribute("id", "container2");
    document.body.appendChild(tag);

    tag = document.createElement("div");
    tag.setAttribute("id", "container3");
    document.body.appendChild(tag);

    tag = document.createElement("button");
    tag.addEventListener("click", createAp2);
    text = document.createTextNode("Apartado 2");
    tag.appendChild(text);
    cont = document.getElementById("container2");
    cont.appendChild(tag);

    tag = document.createElement("h3");
    text = document.createTextNode("Apartado 3");
    tag.appendChild(text);
    cont = document.getElementById("container3");
    cont.appendChild(tag);

    cont = document.getElementById("container3");
    cont.appendChild(crearTable(datosTr));
}

/////////// OPCION 1
// Se le debe pedir dos números al usuario e indicar si son pares y múltiplos de 25 ambos, uno de ellos o ninguno.

// Creación de html
function createOp1(){
    eraser(); // Borra si contiene algo el div previamente.
    cont = document.getElementById("container"); // accede al div donde escribiremos los input.

    // creación label1
    tag = document.createElement("label");
    text = document.createTextNode("Introduce el primer número: ");
    tag.appendChild(text);
    cont.appendChild(tag);
    
    // creación Input1
    tag = document.createElement("input");
    tag.setAttribute("type", "number");
    tag.setAttribute("name", "n1op1");
    cont.appendChild(tag);
    tag = document.createElement("label");
    
    // creación br
    tag = document.createElement("br");
    cont.appendChild(tag);

    // creación label2
    tag = document.createElement("label");
    text = document.createTextNode("Introduce el segundo número: ");
    tag.appendChild(text);
    cont.appendChild(tag);

    // creación input2
    tag = document.createElement("input");
    tag.setAttribute("type", "number");
    tag.setAttribute("name", "n2op1");
    cont.appendChild(tag);
    tag = document.createElement("label");

    // creación br
    tag = document.createElement("br");
    cont.appendChild(tag);

    tag = document.createElement("button");
    tag.addEventListener("click", parMult);
    text = document.createTextNode("Calcular");
    tag.appendChild(text);
    cont.appendChild(tag);

}

// función principal
function parMult() {
    let n1 = document.getElementsByName("n1op1")[0].value;
    let n2 = document.getElementsByName("n2op1")[0].value;
    
    if (((n1 % 25 == 0) && (n1 % 2 == 0)) && ((n2 % 25 == 0) && (n2 % 2 == 0))) {
        tag = document.getElementsByTagName("div")[0];
        let p = document.createElement("p");
        text = document.createTextNode(`Tanto ${n1} como ${n2} son múltiplo de 25 y pares.`);
        p.appendChild(text);
        tag.appendChild(p);
    } else if(((n1 % 25 != 0) && (n1 % 2 != 0)) && ((n2 % 25 != 0) && (n2 % 2 != 0))){
        tag = document.getElementsByTagName("div")[0];
        let p = document.createElement("p");
        text = document.createTextNode(`Ni el número ${n1} ni el número ${n2} son múltiplo de 25 y ni pares.`);
        p.appendChild(text);
        tag.appendChild(p);
    } else {
        tag = document.getElementsByTagName("div")[0];
        let p = document.createElement("p");
        text = document.createTextNode(`Al menos uno de los dos números es múltiplo de 25.`);
        p.appendChild(text);
        tag.appendChild(p);
    }
}

/////////// OPCION 2
// Se le debe pedir una palabra y comprobar si empieza o termina por a.

// Creación de html
function createOp2(){
    eraser(); // Borra si contiene algo el div previamente.
    cont = document.getElementById("container"); // accede al div donde escribiremos los input.

    // creación label1
    tag = document.createElement("label");
    text = document.createTextNode("Introduce una palabra: ");
    tag.appendChild(text);
    cont.appendChild(tag);
    
    // creación Input1
    tag = document.createElement("input");
    tag.setAttribute("type", "text");
    tag.setAttribute("name", "wordOp2");
    cont.appendChild(tag);
    tag = document.createElement("label");
    
    // creación br
    tag = document.createElement("br");
    cont.appendChild(tag);

   
    // creación br
    tag = document.createElement("br");
    cont.appendChild(tag);

    tag = document.createElement("button");
    tag.addEventListener("click", tieneA);
    text = document.createTextNode("Comprobar");
    tag.appendChild(text);
    cont.appendChild(tag);
}

// Función principal
function tieneA(){
    let w = document.getElementsByName("wordOp2")[0].value.toLowerCase();

    if((w[0] == "a") && (w[w.length-1] == "a")){
        tag = document.getElementsByTagName("div")[0];
        let p = document.createElement("p");
        text = document.createTextNode(`La palabra introducida ${w} termina y empieza por la letra a.`);
        p.appendChild(text);
        tag.appendChild(p);
    } else if(w[w.length-1] == "a"){
        tag = document.getElementsByTagName("div")[0];
        let p = document.createElement("p");
        text = document.createTextNode(`La palabra introducida ${w} termina por la letra a.`);
        p.appendChild(text);
        tag.appendChild(p);
    } else if(w[0] == "a"){
        tag = document.getElementsByTagName("div")[0];
        let p = document.createElement("p");
        text = document.createTextNode(`La palabra introducida ${w} empieza por la letra a.`);
        p.appendChild(text);
        tag.appendChild(p);
    } else{
        tag = document.getElementsByTagName("div")[0];
        let p = document.createElement("p");
        text = document.createTextNode(`La palabra introducida ${w} ni termina ni empieza por la letra a.`);
        p.appendChild(text);
        tag.appendChild(p);
    }
}

//////////////// Apartado 2
// Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta (debes presuponer que la frase tiene un único espacio entre palabras).

// Creación de html
function createAp2(){
    cont = document.getElementById("container2"); // accede al div donde escribiremos los input.
    tag = document.createElement("br");
    cont.appendChild(tag);

    // creación label1
    tag = document.createElement("label");
    text = document.createTextNode("Introduce una frase: ");
    tag.appendChild(text);
    cont.appendChild(tag);

    tag = document.createElement("input");
    tag.setAttribute("type", "text");
    tag.setAttribute("name", "phraseAp2");
    cont.appendChild(tag);

    /* WIP
    tag = document.createElement("button");
    tag.addEventListener("click", spaces);
    text = document.createTextNode("Contar palabras");
    tag.appendChild(text);
    cont.appendChild(tag);*/

    tag = document.createElement("p");
    text = document.createTextNode("No me ha dado tiempo a terminar este apartado.");
    tag.appendChild(text);
    cont.appendChild(tag);
}
 /* WIP
function spaces(){
    let phrase = document.getElementsByName("phraseAp2");
    let cont = 0;


    console.log(phrase);
}
*/

//////////////// Apartado 3
// Realiza la tabla de la imagen con la misma información usando herramientas de DOM y JS, el body en HTML sólo puede tener la etiqueta script.

function crearTd(texto) { // Crear td
    let nodoText = document.createTextNode(texto);
    let nodoTd = document.createElement("td");
    nodoTd.appendChild(nodoText);
    return nodoTd;
}

function crearTr(datosTd) { // crear tr
    let nodoTr = document.createElement("tr");
    for (let i = 0; i < datosTd.length; i++) {
        nodoTr.appendChild(crearTd(datosTd[i]));
    }
    return nodoTr;
}

function crearTable(datosTr) { // crear tr
    let nodoTable = document.createElement("table");
    for (let i = 0; i < datosTr.length; i++) { // crea las filas
        nodoTable.appendChild(crearTr(datosTr[i])); //No necesito un segundo for porque crearTr() ya lo hace.
    }
    return nodoTable;

}

const datosTr = [["Nombre", "Precio(En euros)", "Descripción", "Calorías"], ["Gofres Belgas", "5.95", "Dos de nuestros famosos Gofres belgas con abundante sirope", "650"], ["Gofres Belgas con fresas", "7.95", "Ligeros Gofres belgas con fresas y nata montada", "900"], ["Gofres con frutas del bosque", "5.95", "Ligeros Gofres belgas con frutas del bosque y nata montada", "650"],  ["Tostada Francesa", "4.50", "Dos gruesas rebanadas de nuestro pan francés casero", "600"],  ["Desayuno de la casa", "6.95", "Dos huevos, bacon o salchicha, tostada y patatas fritas", "950"]];



// Creador de br's
function createBr(quant){
    for (let i = 0; i < quant; i++) {
        tag = document.createElement("br");
        document.body.appendChild(tag);
    }
}

// Borrador div opciones
function eraser(){
    cont = document.getElementById("container");
    cont.innerHTML = "";
    cont = document.getElementById("container2");
    cont.innerHTML = "";
}

init();


let INDEX_PREGUNTA = 0
let puntaje = 0

cargarpregunta(INDEX_PREGUNTA)
// Entorno de  pregunta
function cargarpregunta(index){
  objetopregunta =base_de_preguntas[index];

  opciones =[...objetopregunta.distractores];
  opciones.push(objetopregunta.respuesta);
  opciones.sort(()=>Math.random()-0.5)
  document.getElementById('pregunta').innerHTML=objetopregunta.pregunta;

  if (objetopregunta.imagen){
    document.getElementById("imagen").src = objetopregunta.imagen;
    document.getElementById("imagen").style.display =""; 
  } else {
    document.getElementById("imagen").style.display ="none";
  }
  if (objetopregunta.ayuda){
    document.getElementById("ayuda").style.display ="";
  } else {
    document.getElementById("ayuda").style.display ="none";
  }

  document.getElementById("opcion-1").innerHTML=opciones[0];
  document.getElementById("opcion-2").innerHTML=opciones[1];
  document.getElementById("opcion-3").innerHTML=opciones[2];
  document.getElementById("opcion-4").innerHTML=opciones[3];
}

// Calificación de la pregunta
async function seleccionaropcion(index){
  let validezrespuesta = opciones[index] == objetopregunta.respuesta
  if (validezrespuesta) {
    await Swal.fire({
      title: "Respuesta Correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    puntaje++
  } else {
    await Swal.fire({
      title: "Respuesta Incorrecta",
      html: `La respuesta correcta es " ${objetopregunta.respuesta} " `,
      icon: "error",
    });
  } 
  INDEX_PREGUNTA++;
  if (INDEX_PREGUNTA>= base_de_preguntas.length){
    await Swal.fire({
      title: "Juego términado",
      text: `Tu puntaje fue de: ${puntaje}/${base_de_preguntas.length} `,
    });
    INDEX_PREGUNTA = 0;
    puntaje = 0;
  } 
  cargarpregunta(INDEX_PREGUNTA);
  
}

// PISTA
function ayuda(){
  Swal.fire({
    title: "Pista",
    text: objetopregunta.ayuda,
    imageUrl: objetopregunta.ayudaimg,
    imageHeight: 200,
  })
}
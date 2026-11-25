function LaTeX(code){
  return `https://latex.codecogs.com/svg.image?\\int&space;${code}`;
}
function opnLaTeX(code){
  return `<img src = "${LaTeX(code)}" style = "height: 40px" >`;
}
let base_de_preguntas = [
  {
    pregunta:"¿Cuales son las principales componentes del sistema circulatorio?",
    ayuda:"",
    ayudaimg: "https://static.vecteezy.com/system/resources/thumbnails/006/852/331/small/the-human-circulatory-system-vector.jpg",
    imagen: "https://static.vecteezy.com/system/resources/thumbnails/006/852/331/small/the-human-circulatory-system-vector.jpg",
    respuesta:"Pulmones, venas, arterías y corazón",
    distractores:["Pulmones, venas, vaso y corazón",
    "Corazón, medula osea, arterias y venas","Corazón, medula osea, pulmon y venas"],
    },
  {
    pregunta:"¿Cuál es la función de los glóbulos rojos?",
    ayuda:"",
    ayudaimg:"https://st1.uvnimg.com/dims4/default/6e21d16/2147483647/thumbnail/400x225/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fbtg%2Fcuriosidades.batanga.com%2Ffiles%2F11-cosas-sorprendentes-sobre-el-sistema-circulatorio-que-no-sabias-1.jpg",
    imagen: "https://st1.uvnimg.com/dims4/default/6e21d16/2147483647/thumbnail/400x225/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fbtg%2Fcuriosidades.batanga.com%2Ffiles%2F11-cosas-sorprendentes-sobre-el-sistema-circulatorio-que-no-sabias-1.jpg",
    respuesta:"Transportar el oxigeno",
    distractores:["Eliminar desechos","Transportar nutrientes","Protección inmunológico"],
    },
  {
    pregunta:"¿Cuál NO es una diferencia entre las arterias y las venas?",
    ayuda:"",
    ayudaimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEO323zz_bn9YE8ADv4ofqRLTL0H8rUD0jXw&usqp=CAU",
    imagen:"https://www.visiblebody.com/hubfs/learn/assets/es/circulatory/02B-Tipos-de-vasos-sangu%C3%ADneos.jpg",
    respuesta: "Las venas conducen sangre desoxigenada y las arterias sangre oxigenada.",
    distractores: ["Las paredes de las venas son más finas, y las paredes de las arterias son más rígidas. ",
                  "La presión sanguínea en las venas es baja, y la presión sanguínea en las arterias es alta.",
                  "Las venas conducen sangre desde tejidos/órganos hasta corazón, y las arterias conducen sangre desde el corazón hacia tejidos/órganos."]
    },
  {
    pregunta:"¿Cuál es el funcionamiento de las válvulas mitral y tricúspide?",
    ayuda:"",
    ayudaimg: "https://cirugiacardiovascularsevilla.com/wp-content/uploads/2018/10/3.-Cu%C3%A1les-son-y-para-qu%C3%A9-sirven-las-v%C3%A1lvulas-del-coraz%C3%B3n-600x533.jpg",
    respuesta: "Impedir contraflujo.",
    distractores: ["Potenciar el flujo de sangre.","Aislar arterias.","Aislar venas."]
    },
  {
    pregunta:"¿Qué tipo de sangre transporta la arteria pulmonar?",
    ayuda:"Ya la has visto :OuttaPocket:",
    ayudaimg: "https://cirugiacardiovascularsevilla.com/wp-content/uploads/2018/10/3.-Cu%C3%A1les-son-y-para-qu%C3%A9-sirven-las-v%C3%A1lvulas-del-coraz%C3%B3n-600x533.jpg",
    respuesta: " Desoxigenada, porque se dirige hacia el pulmón.",
    distractores: ["Oxigenada, porque proviene del pulmón.","Desoxigenada, porque es una arteria.","Oxigenada, porque es una arteria."]
  },
  {
    pregunta:"Partiendo del punto de oxigenación de la sangre, ¿cuál es el flujo que sigue?",
    respuesta: "Pulmón, venas, corazón y arterias.",
    distractores: ["Pulmón, venas, arterias y corazón.","Pulmón, corazón, arterias y venas.","Pulmón, arterias, corazón, venas."]
  },
   

];


function LaTeX(code){
  return `https://latex.codecogs.com/svg.image?\\int&space;${code}`;
}
function opnLaTeX(code){
  return `<img src = "${LaTeX(code)}" style = "height: 40px" >`;
}
let base_de_preguntas = [
  {
    pregunta:"En el bloqueo cardiaco completo,",
    ayuda:"lo siento, sigue intentando",
    respuesta:"es frecuente la fibrilación ventricular",
    distractores:["puede haber lipotimia porque las aurículas son incapaces de bombear sangre a los ventrículos",
    "la frecuencia auricular es más baja que la ventricular","puede haber lipotimia por los periodos prolongados durante los cuales los ventrículos no se contraen"],
    },
  {
    pregunta:"¿Cuál es la función de los glóbulos rojos?",
    ayuda:"",
    respuesta:"transportar el oxigeno",
    distractores:["","",""],
    },
  {
    pregunta:"¿quien pintó la mona lisa?",
    ayuda:"hola soy yo otra vez",
    ayudaimg: "https://i.pinimg.com/originals/b0/ba/ef/b0baef1540985d86fdc0dbf70613b953.jpg",
    imagen:"https://www.researchgate.net/profile/Jan-Blommaert/publication/265850004/figure/fig3/AS:392183854190596@1470515325011/Mona-Lisa-Bitch-please-Google-Images-downloaded-September-1-2014_Q320.jpg",
    respuesta: "Leonardo da vinci",
    distractores: ["picaso","Beethoven","Miguel Angel"]
    },
  {
    pregunta:"Resuelva la integral",
    imagen: LaTeX(`\\ x^{2} dx `),
    respuesta: opnLaTeX(`\\frac{1}{3}x^{3} + c`),
    distractores: ["5","3","-4"]
    },
  {
    pregunta:"¿Cuanto es 2*2?",
    ayuda:"No sea bruto",
    respuesta: " 4 ",
    distractores: ["5","3","-4"]
  },
  {
    pregunta:"¿Cuanto es 2*3?",
    respuesta: " 6",
    distractores: ["5","3","-4"]
  },
   

];


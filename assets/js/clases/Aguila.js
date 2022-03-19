import Animales from "./Animales.js";

class Aguila extends Animales {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    get chillar(){
        console.log(this.sonido)
    }
}
export default Aguila

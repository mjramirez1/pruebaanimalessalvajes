import Animales from "./animales.js";

class Aguila extends Animales {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    get chillar(){
        console.log(this.sonido)
    }
}
export default Aguila
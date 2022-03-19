import Animales from "./animales.js";

class Lobo extends Animales {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    get aullar(){
        console.log(this.sonido)
    }
}
export default Lobo
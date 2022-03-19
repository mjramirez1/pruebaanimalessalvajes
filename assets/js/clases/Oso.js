import Animales from "./Animales.js";

class Oso extends Animales {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    get Grunir(){
        console.log(this.sonido)
    }
}
export default Oso

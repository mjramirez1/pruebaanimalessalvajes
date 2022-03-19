import Animales from "./animales.js";

class Serpiente extends Animales {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    get sisear(){
        console.log(this.sonido)
    }
}
export default Serpiente
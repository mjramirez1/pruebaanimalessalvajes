import Animales from "./animales.js";

class Leon extends Animales {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    get rugir(){
        console.log(this.sonido)
    }
}
export default Leon
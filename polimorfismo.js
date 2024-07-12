

class Bloco{
    //atributos
    constructor(textura,resistencia){
        this.textura = textura
        this.resistencia = resistencia
    }
    //ações 
    criarBloco(){
        console.log("-----------------------------------------------")
        console.log("[]")
        console.log("[]")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resiste de ${this.resistencia}`)

    }

    construir(){
        console.log(`Bloco de ${this.textura} colocado.`)
    }

    minerar(){
        console.log("[] [] [] [] Recursos obtidos!")
    }
}


/****** MUNDO *****/

console.log()

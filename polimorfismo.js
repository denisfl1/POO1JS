

class Bloco{
    //atributos
    constructor(textura,resistencia){
        this.textura = textura
        this.resistencia = resistencia
    }
    //ações // Métodos
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




class Enxada extends Bloco{
    constructor(textura,resistencia,conquista){
        super(textura,resistencia)
        this.conquista = conquista
    }
        //ações
        criarEnxada(){
            console.log("---------------------------------------------")
            console.log("-")
            console.log("/")
            console.log(`Enxada de ${this.textura}`)
            console.log(`Resistência: ${this.resistencia}`)
        }

        arar(){
            console.log("._._._. Terra arada!")

            if(this.conquista){
                console.log("Conquista obtida!")
            }

        }
}



/****** MUNDO *****/

console.clear()
console.log("Polimorfismo")
console.log("")

//instanciando um objeto 
const bloco1 = new Bloco("terra",1)
bloco1.textura = "diamante"
bloco1.criarBloco()
bloco1.construir()

const bloco3 = new Bloco("pedra",5)
bloco3.criarBloco()
bloco3.minerar()

const enxada1 = new Enxada("madeira", 2,false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada("ferro", 5,true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("diamante", 10,false)
enxada3.criarEnxada()
enxada3.arar()


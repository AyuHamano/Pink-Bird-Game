
const source = new Image();
source.src = './source.png'

const canvas = document.querySelector('canvas');
console.log(document.querySelector('canvas'));

const context = canvas.getContext('2d')

const pinkBird = {
    sourceX: 0,
    sourceY: 0,
    largura: 33,
    altura: 24,
    positionX: 30,
    positionY: 50,
    autoDesenha() {
        context.drawImage(
            source,
            pinkBird.sourceX,
            pinkBird.sourceY,
            pinkBird.largura,
            pinkBird.altura,
            pinkBird.positionX,
            pinkBird.positionY,
            pinkBird.largura,
            pinkBird.altura,
        ) 
    }
}

const piso = {
    sourceX: 0,
    sourceY: 610,
    largura: 224,
    altura: 112,
    positionX: 0,
    positionY: canvas.height - 112,
    autoDesenha() {
        context.drawImage(
            source,
            piso.sourceX,
            piso.sourceY,
            piso.largura,
            piso.altura,
            piso.positionX,
            piso.positionY,
            piso.largura,
            piso.altura,
        ) 
        context.drawImage(
            source,
            piso.sourceX,
            piso.sourceY,
            piso.largura,
            piso.altura,
            piso.positionX + piso.largura,
            piso.positionY,
            piso.largura,
            piso.altura,
        ) 
    }
}


function loop() {
    pinkBird.autoDesenha()
    piso.autoDesenha()
    requestAnimationFrame(loop)
}

loop()

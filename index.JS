
class Jogador {
    canvas = document.getElementById("Canvas");
    // O personagem do jogador éum objeto de uma classe
    ctx = {

        corpo: this.canvas.getContext("2d"),


        desenhar: function (y, x, a, l) {
            this.corpo.fillStyle = "blue"
            this.corpo.fillRect(y, x, a, l);
        },

        apagar: function (y, x, a, l) {
            this.corpo.clearRect(y, x, a, l)
        },


    }

    // movimento da     
    Eixo_x = 0;
    Eixo_y = 0;
    // corpo da figura
    Largura = 100;
    Altura = 100;
    Inicializar() {
        this.ctx.desenhar(this.Eixo_x, this.Eixo_y, this.Altura, this.Largura);

        // this.ctx.(this.Eixo_y, this.Eixo_x, this.Altura, this.Largura);
    }
    RemoverMovimento() {
        this.ctx.apagar(0, 0, this.canvas.width, this.canvas.height)
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    AdicionarMovimento_eixoY(valor) {
        this.Eixo_y += valor;
        this.ctx.desenhar(this.Eixo_x, this.Eixo_y, this.Altura, this.Largura)
        // this.ctx.fillRect(this.Eixo_x, this.Eixo_y, this.Altura, this.Largura);
    }
    AdicionarMovimento_eixoX(valor) {

        this.Eixo_x += valor;
        this.ctx.desenhar(this.Eixo_x, this.Eixo_y, this.Altura, this.Largura)
        // this.ctx.fillRect(this.Eixo_x, this.Eixo_y, this.Altura, this.Largura);
    }
}

class Obstaculo {
    canvas = document.getElementById("Canvas");
    ctx1 = this.canvas.getContext("2d");

    // um objeto
    cenario =
        [
            // [eixo x(posicao), eixo y(posicao),eixo x(aresta), eixo y(aresta), ]
            [200, 0],
            [200, 100],
            [200, 150],
            [200, 200],
            [200, 400],
        ]
    // anatomia figura
    Largura = 100;
    Altura = 100;


    Inicializar() {
        this.ctx1.fillStyle = "black";
        for (let obs of this.cenario) {
            this.ctx1.fillRect(obs[0], obs[1], this.Altura, this.Largura);
        }
    }

    Obstaculo() {

    }


}

const jogador = new Jogador();
const obstaculo = new Obstaculo();

const canvas = document.getElementById("Canvas");
canvas.onload = obstaculo.Inicializar();
canvas.onload = jogador.Inicializar();

function move(event) {

    let tecla = event.which;
    /*37 -Esquerda - 38-cima - 39-direita 40-baixo*/
    // A ideia é deletar o quadro anterior e criar um quadro novo, dando a falsa ideia de movimento.

    jogador.RemoverMovimento();
    obstaculo.Inicializar();
    // Movimenta para Baixo e se passar volta ao começo
    if (tecla == 40) {
        // console.log(jogador.canvas.height)
        if (jogador.Eixo_y <= 350) {
            if (jogador.Eixo_x == 200 && jogador.Eixo_y != 200 || jogador.Eixo_x == 150 || jogador.Eixo_x == 250) {
                alert("mov stop")
                jogador.AdicionarMovimento_eixoY(0);
                return
            }
            jogador.AdicionarMovimento_eixoY(50);
        }
        else {
            jogador.AdicionarMovimento_eixoY(-400);
        }
    }
    // // Movimenta para Cima e se passar volta ao começo
    if (tecla == 38) {
        if (jogador.Eixo_y <= 400 && jogador.Eixo_y >= 50) {
            if (jogador.Eixo_x == 200 && jogador.Eixo_y != 400 || jogador.Eixo_x == 250 || jogador.Eixo_x == 150) {
                alert("mov stop")
                jogador.AdicionarMovimento_eixoY(0);
                return
            }
            jogador.AdicionarMovimento_eixoY(-50);
        }
        else {
            jogador.AdicionarMovimento_eixoY(400);
        }
    }
    // // Movimenta para a Direita e se passar volta ao começo
    if (tecla == 39) {
        // console.log(jogador.Eixo_x)
        if (jogador.Eixo_x <= 350 && jogador.Eixo_x >= 0) {
            if (jogador.Eixo_x == 100 && jogador.Eixo_y != 300) {
                alert("mov stop")
                jogador.AdicionarMovimento_eixoX(0);
                return;
            }
            jogador.AdicionarMovimento_eixoX(50);
        }
        else {
            jogador.AdicionarMovimento_eixoX(-400);
        }

    }
    // Movimenta para a Esquerda e se passar volta ao começo
    if (tecla == 37) {
        // console.log(jogador.Eixo_x)
        if (jogador.Eixo_x >= 0 && jogador.Eixo_x >= 50) {
            if (jogador.Eixo_x == 300 && jogador.Eixo_y != 300) {
                alert("mov stop")
                jogador.AdicionarMovimento_eixoX(0);
                return;
            }
            jogador.AdicionarMovimento_eixoX(-50);
        } else {
            jogador.AdicionarMovimento_eixoX(400);
        }

    }


    console.log("x " + jogador.Eixo_x)
    console.log("y " + jogador.Eixo_y)

}
document.addEventListener("keydown", move);



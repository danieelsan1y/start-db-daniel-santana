class Forca {

  constructor(palavraCorreta) {
    this.palavraCorreta = palavraCorreta;
    this.letrasChutadas = []
    this.palavra = []
    this.vidas = 6;
    
    this.controlePalavraCorreta = this.palavraCorreta;
    this.iniciarPalavra()
  }

  #getPalavraCorreta = function () {
    return this.palavraCorreta

  }

  chutar(letra) {
    //console.log(letra, " ", this.palavraCorreta, " ", this.vidas)
    let controleSeExisteLetraNaPalavra = 0
    if (this.verificarSeLetraJaFoiChutada(letra) !== 1 && letra.length == 1) {
      this.letrasChutadas.push(letra)
      for (let i = 0; i < this.controlePalavraCorreta.length; i++) {
        if (this.controlePalavraCorreta.charAt(i) === letra ) {
          this.controlePalavraCorreta = this.controlePalavraCorreta.replace(letra, '')
          controleSeExisteLetraNaPalavra = 1
        }
      }
      if (controleSeExisteLetraNaPalavra === 0 && this.vidas > 0) {
        
        this.vidas--
      } 
      if(controleSeExisteLetraNaPalavra ===1) {
        this.inserirLetrasChutadasNaPalavra(letra)
      }
        
    
      controleSeExisteLetraNaPalavra = 0;
    }
    
  
  }

  buscarEstado() {
    let estado
    if (this.vidas > 0 && this.controlePalavraCorreta.length !== 0) {
      return "aguardando chute"
    } else if (this.vidas === 0) {
      return "perdeu"
    } else {
      return "ganhou"
    }

  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"


  verificarSeLetraJaFoiChutada(letra) {
    let controle =0
    if (this.letrasChutadas.length !== 0) {
      for (let valor in this.letrasChutadas) {
        if (letra === this.letrasChutadas[valor]) {
          controle = 1
        }
      }
    }
    return controle;
  }

  iniciarPalavra() {
    for(let i=0 ; i<this.palavraCorreta.length ; i++) {
      this.palavra.push("_")
    }
  }

  inserirLetrasChutadasNaPalavra(letra) {
    for(let i=0 ; i< this.palavraCorreta.length; i++) {
      if(letra === this.palavraCorreta.charAt(i)) {
        this.palavra[i] = letra

        
      }
      
    }
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }


}
module.exports = Forca;

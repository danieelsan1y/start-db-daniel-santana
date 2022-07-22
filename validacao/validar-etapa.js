const validarEtapa = (vidasEsperadas, palavraEsperada, letrasChutadasEsperadas, estadoEsperado, jogoForca) => {
    const { vidas, palavra: arrPalavra, letrasChutadas: arrLetrasChutadas } = jogoForca.buscarDadosDoJogo();
   const palavra = arrPalavra.join('');
    const letrasChutadas = arrLetrasChutadas.join('');
    const estado = jogoForca.buscarEstado();
    console.log(arrPalavra)
    console.log( jogoForca.buscarDadosDoJogo())
    console.log(jogoForca.buscarEstado())
    console.log('vidas === vidasEsperadas', vidas === vidasEsperadas)
    console.log('palavra === palavraEsperada', palavra === palavraEsperada)
    console.log('letrasChutadas === letrasChutadasEsperadas', letrasChutadas === letrasChutadasEsperadas)
    console.log('estado === estadoEsperado', estado === estadoEsperado)


    return vidas === vidasEsperadas
        && palavra === palavraEsperada
        && letrasChutadas === letrasChutadasEsperadas
        && estado === estadoEsperado;
        
}

module.exports = validarEtapa;
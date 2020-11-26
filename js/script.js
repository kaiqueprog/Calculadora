// Início do Script
function calcular(tipo,valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            document.getElementById('resultado').value = '';
        } else if (valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.') {
            document.getElementById('resultado').value += valor;
        } else if (valor === '=') {
            let valorCampo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valorCampo;
        }
    } else if(tipo === 'valor') {
        document.getElementById('resultado').value += valor;
    }
}
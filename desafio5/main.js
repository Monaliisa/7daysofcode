let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];



adicionar = 'sim';
while (adicionar == 'sim') {
    adicionar = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim' ou 'não'.");
    if (adicionar === "não") {
        break;
    }

    let categoria = prompt("Qual é a categoria do item ? Frutas, laticínios, congelados ou doces ?");
    if (categoria == 'frutas') {
        let fruta = prompt('Digite a fruta que deseja adicionar: ');
        frutas.push(fruta);
    }
    else if (categoria == 'laticínios') {
        let lacticinio = prompt('Qual lacticinio deseja adicionar?');
        laticinios.push(lacticinio);
    }

    else if (categoria == 'congelados') {
        let congelado = prompt('Qual congelado deseja adicionar?');
        congelados.push(congelado);
    }
    else if (categoria == 'doces') {
        let doce = prompt('Qual doce deseja adicionar?');
        doces.push(doce);
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);

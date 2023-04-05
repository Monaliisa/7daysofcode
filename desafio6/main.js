let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];



adicionar = 'sim';
while (adicionar == 'sim') {
    if (frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0) {
        adicionar = prompt("Você deseja adicionar um item na lista de compras? Digite sim ou não.");
    }
    else {
        adicionar = prompt("Você deseja adicionar um item na lista de compras? Digite sim ou não. Caso queira remover algum item, digite remover.")
    }
    if (adicionar === "não") {
        break;
    }
    if (adicionar == 'sim') {
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
    else if (adicionar == 'remover') {
        item = prompt("Qual item que você deseja remover?");

        indexItem = frutas.indexOf(item)
        if (indexItem != -1)
            frutas.splice(indexItem, 1)

        indexItem = laticinios.indexOf(item)
        if (indexItem != -1)
            laticinios.splice(indexItem, 1)

        indexItem = congelados.indexOf(item)
        if (indexItem != -1)
            congelados.splice(indexItem, 1)

        indexItem = doces.indexOf(item)
        if (indexItem != -1)
            doces.splice(indexItem, 1)
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);

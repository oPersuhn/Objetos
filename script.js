/*
let objeto = {
    numeroInfrmado: 1,
    nomeePessoa: "José",
    pessoaIdosa: true
};
console.log(objeto);
console.log(objeto.numeroInfrmado);
console.log(objeto.nomeePessoa);
console.log(objeto.pessoaIdosa);


// o this. só é usado dentro de escopos para informar que o atributo advem daquele mesmo escopo
function Ninja(nome, qtdShuriken){
    this.nome=nome;
    this.estoqueShuriken=qtdShuriken;
    this.atirarShuriken = function(){
        if(this.estoqueShuriken > 0){
            console.log("O ninja atirou o shuriken");
            this.estoqueShuriken--;
        }else{
            console.log("Estoque de shuriken's esgotados")
        }
    }
}

let naruto = new Ninja("Naruto", 3);
naruto.atirarShuriken();
console.log(naruto);




class pessoaFisica {
    constructor(documento, nome, email) {
        this.documento = documento;
        this.email = email;
        this.nome = nome;
    }
    listarDados(){
        console.log(`Documento: ${this.documento}`);
        console.log(`Email: ${this.email}`);
        console.log(`Nome: ${this.nome}`);
    }
}

//Exemplo de uso da classe

const pessoa1 = new pessoaFisica('12345678901', 'empresa@email', 'minhaempresa');
pessoa1.listarDados();

*/
class Lampada {
    constructor(fabricante, numPeca, status, largura, cor, material, voltagem, estoquePeca, peso, comprimento) {
        this.fabricante = fabricante;
        this.numPeca = numPeca;
        this.status = status;
        this.largura = largura;
        this.cor = cor;
        this.material = material;
        this.voltagem = voltagem;
        this.estoquePeca = estoquePeca;
        this.peso = peso;
        this.comprimento = comprimento;
    }
    
    ligar() {
        this.status = "Ligada";
        console.log(this.status);
    }
    
    desligar() {
        this.status = "Desligada";
        console.log(this.status);
    }
    
    vender() {
        if (this.estoquePeca <= 0) {
            console.log("Impossível vender sem estoque!");
            this.comprar();
        } else {
            console.log("A venda foi realizada");
            this.estoquePeca--;
        }
    }
    
    comprar() {
        console.log("A compra foi realizada");
        this.estoquePeca++;
    }
    
    qtdEstoque() {
        console.log(this.estoquePeca);
        alert("A quantidade em estoque é: "+this.estoquePeca)
    }
}

let lampada1 = new Lampada(
    'Philips',
    '1',
    'apagada',
    '10cm',
    'Transparente',
    'Vidro',
    '12v',
    0, // Número da quantidade em vez de uma string
    '50kg',
    '10cm'
);


lampada1.vender();
lampada1.comprar();
lampada1.desligar();
lampada1.ligar();
lampada1.qtdEstoque();


